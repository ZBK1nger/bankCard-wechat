# bankCard-wechat

### 详情代码以及使用参照示例，如果对你有所帮助的请给个Star✨~

### 简介
![屏幕快照 2018-05-29 下午2.03.10.png](https://upload-images.jianshu.io/upload_images/1396824-1e632bc586f631da.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

如上图所示，基本的页面就是这样，在这主要有这么几个点

* 验证手机号的正确（手机号位数，正则判断手机号格式）
* 输入银行卡号后在卡类型下自动匹配成当前银行卡所属银行以及卡类型（如中国建设银行储蓄卡）
* 点击提交像服务器提交数据时进行判断（比如收款人姓名填没填写，银行卡号填没填写等等）

这里主要说下说下属于银行卡自动匹配银行卡信息的逻辑，在当前银行卡的bindinput方法中,时刻监听用户输入的值，然后根据util.js中的bankCardAttribution方法来判断

~~~
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
~~~

如果验证银行卡号正确的话会返回我们一段这样的json，然后就随便.你需要的信息了 👌
![屏幕快照 2018-05-29 下午2.35.33.png](https://upload-images.jianshu.io/upload_images/1396824-79dceca59abd4cad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
