export default {
  sidebar: {
    home: '首页',
    stylegen: '样式生成器',
    help: '帮助',
    projectAddress: '项目地址'
  },
  home: {
    roomIdEmpty: '房间ID不能为空',
    roomIdInteger: '房间ID必须为正整数',
    textEmpty: '不能为空',

    followText: '用户关注主播提示',
    followTextDefault: '关注了直播间',
    joinText: '用户进入直播间提示',
    joinTextDefault: '进入直播间',
    quitText: '用户离开直播间提示',
    quitTextDefault: '离开直播间',
    loveText: '用户点亮爱心提示',
    loveTextDefault: '点亮爱心',
    joinGroupText: '用户加入守护团提示',
    joinGroupTextDefault: '加入了守护团',

    general: '常规',
    roomId: 'AC 房间ID',
    showDanmaku: '显示弹幕',
    showEqualMedal: '只显示本主播对应粉丝牌',
    showFollow: '显示用户关注主播',
    showJoin: '显示用户进入直播间',
    showJoinGroup: '显示用户加入守护团',
    showQuit: '显示用户离开直播间',
    showLove: '显示点亮爱心',
    showGift: '显示礼物',
    showGiftName: '显示礼物名',
    showGiftPrice: '显示礼物价格',
    showACCoinInstead: '用AC币代替价格',
    showGiftPngInstead: '用礼物图片代替头像',
    exchangeRate: '计算汇率（和置顶价格表相关）',
    mergeSimilarDanmaku: '合并相似弹幕',
    mergeSimilarOther: '合并相似其他信息',
    mergeGift: '合并礼物',
    minGiftPrice: '最低显示打赏价格（元）',
    maxNumber: '最大弹幕数',

    block: '屏蔽',
    giftDanmaku: '屏蔽礼物弹幕',
    blockKeywords: '屏蔽关键词',
    onePerLine: '一行一个',
    blockUsers: '屏蔽用户',
    blockMedalLevel: '屏蔽当前直播间勋章等级低于',

    advanced: '高级',
    autoTranslate: '自动翻译弹幕到日语',

    roomUrl: '房间URL',
    copy: '复制',
    enterRoom: '进入房间',
    exportConfig: '导出配置',
    importConfig: '导入配置',

    failedToParseConfig: '配置解析失败：'
  },
  stylegen: {
    outlines: '描边',
    showOutlines: '显示描边',
    outlineSize: '描边尺寸',
    outlineColor: '描边颜色',

    avatars: '头像',
    showAvatars: '显示头像',
    avatarSize: '头像尺寸',

    medal: '粉丝牌',
    showMedalName: '显示粉丝牌',
    showMedalLevel: '显示粉丝牌等级',

    userMark: '用户标记',
    showUserMark: '显示用户标记',

    userNames: '用户名',
    font: '字体',
    fontSize: '字体尺寸',
    lineHeight: '行高（0为默认）',
    normalColor: '普通颜色',
    ownerColor: '主播颜色',
    moderatorColor: '房管颜色',
    showBadges: '显示勋章',
    showColon: '用户名后显示冒号',

    messages: '消息',
    color: '颜色',
    joinColor: '加入直播间颜色',
    quitColor: '离开直播间颜色',
    followColor: '关注直播间颜色',
    loveColor: '点亮爱心颜色',
    joinGroupColor: '加入守护团颜色',
    onNewLine: '在新行显示',

    time: '时间',
    showTime: '显示时间',

    backgrounds: '背景',
    bgColor: '背景色',
    useBarsInsteadOfBg: '用条代替背景',
    messageBgColor: '消息背景色',
    ownerMessageBgColor: '主播消息背景色',
    moderatorMessageBgColor: '房管消息背景色',
    memberMessageBgColor: '舰长消息背景色',

    scAndNewMember: '礼物',
    firstLineFont: '第一行字体',
    firstLineFontSize: '第一行字体尺寸',
    firstLineLineHeight: '第一行行高（0为默认）',
    firstLineColor: '第一行颜色',
    secondLineFont: '第二行字体',
    secondLineFontSize: '第二行字体尺寸',
    secondLineLineHeight: '第二行行高（0为默认）',
    secondLineColor: '第二行颜色',
    scContentLineFont: '礼物内容字体',
    scContentLineFontSize: '礼物内容字体尺寸',
    scContentLineLineHeight: '礼物内容行高（0为默认）',
    scContentLineColor: '礼物内容颜色',
    showNewMemberBg: '显示新暂时未定义的可能存在的物品的背景',
    showScTicker: '显示礼物固定栏',
    showScContent: '显示礼物内容',
    showOtherThings: '显示礼物固定栏之外的内容',

    animation: '动画',
    animateIn: '进入动画',
    fadeInTime: '淡入时间（毫秒）',
    animateOut: '移除旧消息',
    animateOutWaitTime: '等待时间（秒）',
    fadeOutTime: '淡出时间（毫秒）',
    slide: '滑动',
    reverseSlide: '反向滑动',
    playAnimation: '播放动画',

    result: '结果',
    copy: '复制',
    resetConfig: '恢复默认设置'
  },
  help: {
    help: '帮助',
    p1: '1. 从直播间网页复制房间ID',
    p2: '2. 把房间ID输入到首页的房间ID，复制房间URL',
    p3: '3. 使用样式生成器生成样式，复制CSS',
    p4: '4. 在OBS中添加浏览器源',
    p5: '5. URL处输入之前复制的房间URL，自定义CSS处输入之前复制的CSS',
    p6: '6. 更新版本后请重新刷新浏览器源'
  }
}
