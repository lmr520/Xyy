import React from 'react';
import { Image, Platform, FlatList, StyleSheet, Text, View, ScrollView, TouchableOpacity, AsyncStorage, Dimensions, Slider, TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, ListItem, Badge, Avatar, withBadge, SocialIcon, Header, SearchBar, Divider, Overlay, Input, Button } from 'react-native-elements';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';
import img_arr from '../../config/imgarr';
const videofiel = "";
const screenWidth = Dimensions.get('window').width;
const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
];
const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
]
function formatTime(second) {
    let h = 0, i = 0, s = parseInt(second);
    if (s > 60) {
        i = parseInt(s / 60);
        s = parseInt(s % 60);
    }
    // 补零
    let zero = function (v) {
        return (v >> 0) < 10 ? "0" + v : v;
    };
    return [zero(h), zero(i), zero(s)].join(":");
}
export default class videodetail extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <MaterialCommunityIcons
                    raised
                    name='keyboard-backspace'
                    type='font-awesome'
                    color='#f50'
                    backgroundColor="#cccfff"
                    size={ 25 }
                    onPress={ navigation.getParam('back') } />
            ),
            headerTitle: (
                <View style={ { width: Dimensions.get("screen").width * 2 / 3, alignItems: 'center', justifyContent: 'center' } }>
                    <Text>视频详情</Text>
                </View>


            ),
            headerRight: (

                <MaterialCommunityIcons
                    raised
                    name='share-variant'
                    type='font-awesome'
                    color='#f50'
                    backgroundColor="#cccfff"
                    size={ 25 }
                    onPress={ navigation.getParam('exitlogin') } />

            ),

        };
    };
    state = {
        videoUrl: img_arr['video'],
        videoCover: img_arr['png1'],
        // videoCover: "http://124.129.157.208:8889/data/uploads/kecheng/2018/01/18/5a600b2c99836.png@0o_0l_220w.png",
        videoWidth: screenWidth,
        videoHeight: screenWidth * 9 / 16, // 默认16：9的宽高比
        showVideoCover: true,    // 是否显示视频封面
        showVideoControl: false, // 是否显示视频控制组件
        isPlaying: false,        // 视频是否正在播放
        currentTime: 0,        // 视频当前播放的时间
        duration: 0,           // 视频的总时长
        isFullScreen: false,     // 当前是否全屏显示
        playFromBeginning: false, // 是否从头开始播放
    };
    exitlogin = () => {
        AsyncStorage.removeItem("userToken");
        this.props.navigation.navigate('Auth');
    }
    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
    componentWillMount() {
        this.props.navigation.setParams({ back: this._signInAsync, exitlogin: this.exitlogin });
        Orientation.lockToLandscape();
    }
    /// -------Video组件回调事件-------

    _onLoadStart = () => {
        console.log('视频开始加载');
    };

    _onBuffering = () => {
        console.log('视频缓冲中...')
    };

    _onLoaded = (data) => {
        console.log('视频加载完成');
        this.setState({
            duration: data.duration,
        });
    };

    _onProgressChanged = (data) => {
        console.log('视频进度更新');
        if (this.state.isPlaying) {
            this.setState({
                currentTime: data.currentTime,
            })
        }
    };

    _onPlayEnd = () => {
        console.log('视频播放结束');
        this.setState({
            currentTime: 0,
            isPlaying: false,
            playFromBeginning: true
        });
    };

    _onPlayError = () => {
        console.log('视频播放失败');
    };

    ///-------控件点击事件-------

    /// 控制播放器工具栏的显示和隐藏
    hideControl = () => {
        if (this.state.showVideoControl) {
            this.setState({
                showVideoControl: false,
            })
        } else {
            this.setState(
                {
                    showVideoControl: true,
                },
                // 5秒后自动隐藏工具栏
                () => {
                    setTimeout(
                        () => {
                            this.setState({
                                showVideoControl: false
                            })
                        }, 5000
                    )
                }
            )
        }
    }

    /// 点击了播放器正中间的播放按钮
    onPressPlayButton = () => {
        let isPlay = !this.state.isPlaying;
        this.setState({
            isPlaying: isPlay,
            showVideoCover: false
        });
        if (this.state.playFromBeginning) {
            this.videoPlayer.seek(0);
            this.setState({
                playFromBeginning: false,
            })
        }
    }

    /// 点击了工具栏上的播放按钮
    onControlPlayPress = () => {
        this.onPressPlayButton();
    }

    /// 点击了工具栏上的全屏按钮
    onControlShrinkPress = () => {
        if (this.state.isFullScreen) {
            Orientation.lockToPortrait();
        } else {
            Orientation.lockToLandscape();
        }
    }

    /// 进度条值改变
    onSliderValueChanged = (currentTime) => {
        this.videoPlayer.seek(currentTime);
        if (this.state.isPlaying) {
            this.setState({
                currentTime: currentTime
            })
        } else {
            this.setState({
                currentTime: currentTime,
                isPlaying: true,
                showVideoCover: false
            })
        }
    }

    /// 屏幕旋转时宽高会发生变化，可以在onLayout的方法中做处理，比监听屏幕旋转更加及时获取宽高变化
    _onLayout = (event) => {
        //获取根View的宽高
        let { width, height } = event.nativeEvent.layout;
        console.log('通过onLayout得到的宽度：' + width);
        console.log('通过onLayout得到的高度：' + height);

        // 一般设备横屏下都是宽大于高，这里可以用这个来判断横竖屏
        let isLandscape = (width > height);
        if (isLandscape) {
            this.setState({
                videoWidth: width,
                videoHeight: height,
                isFullScreen: true,
            })
        } else {
            this.setState({
                videoWidth: width,
                videoHeight: width * 9 / 16,
                isFullScreen: false,
            })
        }
        Orientation.unlockAllOrientations();
    };

    /// -------外部调用事件方法-------

    ///播放视频，提供给外部调用
    playVideo = () => {
        this.setState({
            isPlaying: true,
            showVideoCover: false
        })
    }

    /// 暂停播放，提供给外部调用
    pauseVideo = () => {
        this.setState({
            isPlaying: false,
        })
    }

    /// 切换视频并可以指定视频开始播放的时间，提供给外部调用
    switchVideo = (videoURL, seekTime) => {
        this.setState({
            videoUrl: videoURL,
            currentTime: seekTime,
            isPlaying: true,
            showVideoCover: false
        });
        this.videoPlayer.seek(seekTime);
    }
    render() {
        /* 2. Read the params from the navigation state */
        return (
            <View style={ styles.container } onLayout={ this._onLayout }>
                <View style={ { width: this.state.videoWidth, height: this.state.videoHeight, backgroundColor: '#000000' } }>
                    <Video
                        ref={ (ref) => this.videoPlayer = ref }
                        source={ this.state.videoUrl }
                        rate={ 1.0 }
                        volume={ 1.0 }
                        muted={ false }
                        paused={ !this.state.isPlaying }
                        resizeMode={ 'contain' }
                        playWhenInactive={ false }
                        playInBackground={ false }
                        ignoreSilentSwitch={ 'ignore' }
                        progressUpdateInterval={ 250.0 }
                        onLoadStart={ this._onLoadStart }
                        onLoad={ this._onLoaded }
                        onProgress={ this._onProgressChanged }
                        onEnd={ this._onPlayEnd }
                        onError={ this._onPlayError }
                        onBuffer={ this._onBuffering }
                        style={ { width: this.state.videoWidth, height: this.state.videoHeight } }
                    />
                    {
                        this.state.showVideoCover ?
                            <Image
                                style={ {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: this.state.videoWidth,
                                    height: this.state.videoHeight
                                } }
                                resizeMode={ 'cover' }
                                source={ this.state.videoCover }
                            /> : null
                    }
                    <TouchableWithoutFeedback onPress={ () => { this.hideControl() } }>
                        <View
                            style={ {
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: this.state.videoWidth,
                                height: this.state.videoHeight,
                                backgroundColor: this.state.isPlaying ? 'transparent' : 'rgba(0, 0, 0, 0.2)',
                                alignItems: 'center',
                                justifyContent: 'center'
                            } }>
                            {
                                this.state.isPlaying ? null :
                                    <TouchableWithoutFeedback onPress={ () => { this.onPressPlayButton() } }>
                                        <Image
                                            style={ styles.playButton }
                                            source={ require('../../assets/images/play3.png') }
                                        />
                                    </TouchableWithoutFeedback>
                            }
                        </View>
                    </TouchableWithoutFeedback>
                    {
                        this.state.showVideoControl ?
                            <View style={ [styles.control, { width: this.state.videoWidth }] }>
                                <TouchableOpacity activeOpacity={ 0.3 } onPress={ () => { this.onControlPlayPress() } }>
                                    <Image
                                        style={ styles.playControl }
                                        source={ this.state.isPlaying ? require('../../assets/images/stop.png') : require('../../assets/images/PLAY5.png') }
                                    />
                                </TouchableOpacity>
                                <Text style={ styles.time }>{ formatTime(this.state.currentTime) }</Text>
                                <Slider
                                    style={ { flex: 1 } }
                                    maximumTrackTintColor={ '#999999' }
                                    minimumTrackTintColor={ '#00c06d' }
                                    thumbImage={ require('../../assets/images/home.png') }
                                    value={ this.state.currentTime }
                                    minimumValue={ 0 }
                                    maximumValue={ this.state.duration }
                                    onValueChange={ (currentTime) => { this.onSliderValueChanged(currentTime) } }
                                />
                                <Text style={ styles.time }>{ formatTime(this.state.duration) }</Text>
                                <TouchableOpacity activeOpacity={ 0.3 } onPress={ () => { this.onControlShrinkPress() } }>

                                    <Image
                                        style={ styles.shrinkControl }
                                        source={ this.state.isFullScreen ? require('../../assets/images/nofull.png') : require('../../assets/images/full.png') }
                                    />
                                </TouchableOpacity>
                            </View> : null
                    }
                </View>
                <View style={ styles.playbuttons }>
                    <View style={ styles.buttonstyle }>
                        <Button
                            // title={ '开始播放' }
                            onPress={ () => { this.playVideo() } }
                            icon={
                                <MaterialCommunityIcons
                                    name="play-circle"
                                    size={ 20 }
                                    color="white"
                                />
                            }
                        />

                    </View>
                    <View style={ styles.buttonstyle }>
                        <Button
                            // title={ '暂停播放' } 
                            onPress={ () => { this.pauseVideo() } }
                            icon={
                                <MaterialCommunityIcons
                                    name="stop-circle-outline"
                                    size={ 20 }
                                    color="white"
                                />
                            }
                        />
                    </View>

                    <View style={ styles.buttonstyle }>
                        <Button
                            // title={ '切换视频' } 
                            onPress={ () => { this.switchVideo(img_arr['video2'], 0) } }
                            icon={
                                <MaterialCommunityIcons
                                    name="reload"
                                    size={ 20 }
                                    color="white"
                                />
                            }
                        />
                    </View>

                </View>
                <ScrollView tabLabel="首页" style={ styles.tabView }>
                    <View style={ { top: 10 } }>
                        {
                            list.map((l, i) => (
                                <ListItem
                                    key={ i }
                                    leftAvatar={ { source: { uri: l.avatar_url } } }
                                    title={ l.name }
                                    subtitle={ l.subtitle }
                                />
                            ))
                        }
                    </View>
                </ScrollView>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
    },
    playButton: {
        width: 50,
        height: 50,
    },
    playControl: {
        width: 24,
        height: 24,
        marginLeft: 15,
    },
    shrinkControl: {
        width: 15,
        height: 15,
        marginRight: 15,
    },
    time: {
        fontSize: 12,
        color: 'white',
        marginLeft: 10,
        marginRight: 10
    },
    control: {
        flexDirection: 'row',
        height: 44,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    playbuttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 20,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#C7C7C7',
        width: 200,
    },
    buttonstyle: {
        width: 60,
        margin: 3
    },
    tabView: {
        top: 20,
        width: 340,
        height: 300,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
});