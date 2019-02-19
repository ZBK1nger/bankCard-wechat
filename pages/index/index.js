var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardType: '',
    name: '',
    phoneNumber: '',
    bankName: '',
    bankNumber: ''
  },
  //手机号
  getUserIdCardPhoneNumber: function (e) {
    this.setData({
      phoneNumber: e.detail.value
    })
  },
  //姓名
  getUserIdCardName: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  //银行卡号
  getUserIdCardNumber: function (e) {
    this.setData({
      bankNumber: e.detail.value
    })
    var temp = util.bankCardAttribution(e.detail.value)
    console.log(temp)
    if (temp == Error) {
      temp.bankName = '';
      temp.cardTypeName = '';
    }
    else {
      this.setData({
        cardType: temp.bankName + temp.cardTypeName,
      })
    }
  },
  //银行支行名称
  getUserIdCardBankType: function (e) {
    this.setData({
      bankName: e.detail.value
    })
  },

  //提交转账信息
  submitInfos: function () {
    var compare = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    var that = this;
    if (that.data.name.length == 0 || that.data.phoneNumber.length == 0) {
      wx.showToast({
        title: '用户名或手机号码不能为空',
        icon: 'none',
        image: '',
        duration: 1000
      })
    }
    else if (that.data.phoneNumber.length != 11) {
      wx.showToast({
        title: '手机号长度有误',
        icon: 'none',
        image: '',
        duration: 1000
      })
      return false;
    } else if (!compare.test(this.data.phoneNumber)) {
      wx.showToast({
        title: '请输入正确的手机号！',
        icon: 'none',
        image: '',
        duration: 1000
      })
      return false;
    }
    else if (!that.data.bankNumber) {
      wx.showToast({
        title: '银行卡号不能为空',
        icon: 'none',
        image: '',
        duration: 1000
      })
    }
    else if (!that.data.bankName) {
      wx.showToast({
        title: '支行名称不能为空',
        icon: 'none',
        image: '',
        duration: 1000
      })

    }
    else if (!that.data.cardType) {
      wx.showToast({
        title: '不支持该类型的银行卡，请更换',
        icon: 'none',
        image: '',
        duration: 1000
      })

    }
    else {
      //TODO post data to sever
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})