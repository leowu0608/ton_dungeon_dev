var __extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);i.prototype=e.prototype,t.prototype=new i};window.generateEUI=window.generateEUI||{},generateEUI.paths=generateEUI.paths||{},generateEUI.styles=void 0,generateEUI.skins={},generateEUI.paths["resource/skins/battle/item/BattleBossBuffItemSkin.exml"]=window.BattleBossBuffItemSkin=function(t){function e(){t.call(this),this.skinParts=["icon","num"],this.height=30,this.width=30,this.elementsContent=[this.icon_i(),this.num_i()]}__extends(e,t);var i=e.prototype;return i.icon_i=function(){var t=new core.UIImage;return this.icon=t,t.height=30,t.source="battle_buff_23",t.width=30,t.x=0,t.y=0,t},i.num_i=function(){var t=new eui.Label;return this.num=t,t.bottom=-3,t.height=20,t.size=20,t.text="10",t.textAlign="right",t.textColor=16777215,t.width=30,t.x=0,t},e}(eui.Skin),generateEUI.paths["resource/skins/battle/item/BattleBossPassiveItemSkin.exml"]=window.BattleBossPassiveItemSkin=function(t){function e(){t.call(this),this.skinParts=["bg","icon"],this.height=50,this.width=50,this.elementsContent=[this.bg_i(),this.icon_i()]}__extends(e,t);var i=e.prototype;return i.bg_i=function(){var t=new core.UIImage;return this.bg=t,t.height=50,t.source="battle_bossSkillBg",t.width=50,t.x=0,t.y=0,t},i.icon_i=function(){var t=new core.UIImage;return this.icon=t,t.height=46,t.source="battle_passive_162",t.width=46,t.x=2,t.y=2,t},e}(eui.Skin),generateEUI.paths["resource/skins/battle/item/BattleBossSkillItemSkin.exml"]=window.BattleBossSkillItemSkin=function(t){function e(){t.call(this),this.skinParts=["bg","icon"],this.height=50,this.width=50,this.elementsContent=[this.bg_i(),this.icon_i()]}__extends(e,t);var i=e.prototype;return i.bg_i=function(){var t=new core.UIImage;return this.bg=t,t.height=50,t.source="battle_bossSkillBg",t.width=50,t.x=0,t.y=0,t},i.icon_i=function(){var t=new core.UIImage;return this.icon=t,t.height=46,t.source="battle_skill_2",t.width=46,t.x=2,t.y=2,t},e}(eui.Skin),generateEUI.paths["resource/skins/battle/item/BattlePlayerBuffItemSkin.exml"]=window.BattlePlayerBuffItemSkin=function(t){function e(){t.call(this),this.skinParts=["icon","num"],this.height=30,this.width=30,this.elementsContent=[this.icon_i(),this.num_i()]}__extends(e,t);var i=e.prototype;return i.icon_i=function(){var t=new core.UIImage;return this.icon=t,t.height=30,t.source="battle_buff_23",t.width=30,t.x=0,t.y=0,t},i.num_i=function(){var t=new eui.Label;return this.num=t,t.bottom=-3,t.height=20,t.size=20,t.text="10",t.textAlign="right",t.textColor=16777215,t.width=30,t.x=0,t},e}(eui.Skin),generateEUI.paths["resource/skins/battle/item/BattlePlayerPassiveItemSkin.exml"]=window.BattlePlayerPassiveItemSkin=function(t){function e(){t.call(this),this.skinParts=["icon"],this.height=60,this.width=60,this.elementsContent=[this.icon_i()]}__extends(e,t);var i=e.prototype;return i.icon_i=function(){var t=new core.UIImage;return this.icon=t,t.height=60,t.source="battle_passive_1",t.width=60,t.x=0,t.y=0,t},e}(eui.Skin),generateEUI.paths["resource/skins/battle/item/BattlePlayerSkillItemSkin.exml"]=window.BattlePlayerSkillItemSkin=function(t){function e(){t.call(this),this.skinParts=["bg","icon","iconGrp","cdIcon","typeBg","typeTxt","keyTxt","cdTxt","cdItem","skillGrp"],this.height=108,this.width=108,this.elementsContent=[this.skillGrp_i()],eui.Binding.$bindProperties(this,["cdItem"],[0],this.cdIcon,"mask")}__extends(e,t);var i=e.prototype;return i.skillGrp_i=function(){var t=new eui.Group;return this.skillGrp=t,t.anchorOffsetX=54,t.anchorOffsetY=54,t.height=108,t.width=108,t.x=54,t.y=54,t.elementsContent=[this.iconGrp_i(),this.cdIcon_i(),this.typeBg_i(),this.typeTxt_i(),this.keyTxt_i(),this.cdTxt_i(),this.cdItem_i()],t},i.iconGrp_i=function(){var t=new eui.Group;return this.iconGrp=t,t.height=108,t.visible=!0,t.width=108,t.x=0,t.y=0,t.elementsContent=[this.bg_i(),this.icon_i()],t},i.bg_i=function(){var t=new core.UIImage;return this.bg=t,t.height=108,t.source="battle_skillBg",t.width=108,t.x=0,t.y=0,t},i.icon_i=function(){var t=new core.UIImage;return this.icon=t,t.alpha=.8,t.height=94,t.source="battle_skill_2",t.width=94,t.x=7,t.y=7,t},i.cdIcon_i=function(){var t=new core.UIImage;return this.cdIcon=t,t.height=100,t.source="battle_skillMask",t.visible=!0,t.width=100,t.x=4,t.y=4,t},i.typeBg_i=function(){var t=new core.UIImage;return this.typeBg=t,t.height=32,t.source="battle_skillNameBg",t.visible=!0,t.width=78,t.x=14,t.y=91,t},i.typeTxt_i=function(){var t=new eui.Label;return this.typeTxt=t,t.horizontalCenter=0,t.size=22,t.text="破甲",t.textColor=2960685,t.y=99,t},i.keyTxt_i=function(){var t=new eui.Label;return this.keyTxt=t,t.left=0,t.right=0,t.size=26,t.text="H",t.textAlign="center",t.textColor=16711680,t.top=15,t},i.cdTxt_i=function(){var t=new eui.Label;return this.cdTxt=t,t.height=30,t.left=0,t.right=0,t.size=30,t.text="5s",t.textAlign="center",t.textColor=14540253,t.verticalCenter=0,t},i.cdItem_i=function(){var t=new eui.Rect;return this.cdItem=t,t.height=108,t.visible=!0,t.width=108,t.x=0,t.y=0,t},e}(eui.Skin),generateEUI.paths["resource/skins/battle/other/PlayerHpBarSkin.exml"]=window.PlayerHpBarSkin=function(t){function e(){t.call(this),this.skinParts=["thumb"],this.height=14,this.width=84,this.elementsContent=[this._UIImage1_i(),this.thumb_i()]}__extends(e,t);var i=e.prototype;return i._UIImage1_i=function(){var t=new core.UIImage;return t.height=14,t.scale9Grid=new egret.Rectangle(3,5,4,4),t.source="battle_playerHpBg",t.width=84,t.x=0,t.y=0,t},i.thumb_i=function(){var t=new core.UIImage;return this.thumb=t,t.height=10,t.scale9Grid=new egret.Rectangle(2,3,2,4),t.source="battle_playerHp2",t.width=80,t.x=2,t.y=2,t},e}(eui.Skin),generateEUI.paths["resource/skins/battle/item/PlayerHpItemSkin.exml"]=window.PlayerHpItemSkin=function(t){function e(){t.call(this),this.skinParts=["hpBar","shieldIcon","buffList"],this.height=14,this.width=84,this.elementsContent=[this.hpBar_i(),this.shieldIcon_i(),this.buffList_i()]}__extends(e,t);var i=e.prototype;return i.hpBar_i=function(){var t=new eui.ProgressBar;return this.hpBar=t,t.height=14,t.maximum=100,t.minimum=0,t.skinName="PlayerHpBarSkin",t.slideDuration=0,t.value=50,t.width=84,t.x=0,t.y=0,t},i.shieldIcon_i=function(){var t=new core.UIImage;return this.shieldIcon=t,t.height=10,t.scale9Grid=new egret.Rectangle(2,3,2,4),t.source="battle_playerHp1",t.visible=!0,t.width=80,t.x=2,t.y=2,t},i.buffList_i=function(){var t=new eui.List;return this.buffList=t,t.height=30,t.itemRendererSkinName=BattlePlayerBuffItemSkin,t.scaleX=.7,t.scaleY=.7,t.x=0,t.y=-26,t.layout=this._HorizontalLayout1_i(),t},i._HorizontalLayout1_i=function(){var t=new eui.HorizontalLayout;return t.gap=2,t},e}(eui.Skin),generateEUI.paths["resource/skins/battle/other/BattleBossHpBarSkin.exml"]=window.BattleBossHpBarSkin=function(t){function e(){t.call(this),this.skinParts=["fadeMask","thumbMask","next","fade","thumb","labelDisplay"],this.height=28,this.width=642,this.elementsContent=[this.fadeMask_i(),this.thumbMask_i(),this._UIImage1_i(),this.next_i(),this.fade_i(),this.thumb_i(),this.labelDisplay_i()],eui.Binding.$bindProperties(this,["fadeMask"],[0],this.fade,"mask"),eui.Binding.$bindProperties(this,["thumbMask"],[0],this.thumb,"mask")}__extends(e,t);var i=e.prototype;return i.fadeMask_i=function(){var t=new core.UIImage;return this.fadeMask=t,t.height=28,t.scale9Grid=new egret.Rectangle(5,9,6,10),t.source="battle_bossHpBg",t.width=642,t.x=0,t.y=0,t},i.thumbMask_i=function(){var t=new core.UIImage;return this.thumbMask=t,t.height=28,t.scale9Grid=new egret.Rectangle(5,9,6,10),t.source="battle_bossHpBg",t.width=642,t.x=0,t.y=0,t},i._UIImage1_i=function(){var t=new core.UIImage;return t.height=28,t.scale9Grid=new egret.Rectangle(5,9,6,10),t.source="battle_bossHpBg",t.width=642,t.x=0,t.y=0,t},i.next_i=function(){var t=new core.UIImage;return this.next=t,t.height=22,t.scale9Grid=new egret.Rectangle(3,7,4,8),t.source="battle_bossHp1",t.width=636,t.x=3,t.y=3,t},i.fade_i=function(){var t=new core.UIImage;return this.fade=t,t.height=22,t.scale9Grid=new egret.Rectangle(3,7,4,8),t.source="battle_bossHpFade",t.width=636,t.x=3,t.y=3,t},i.thumb_i=function(){var t=new core.UIImage;return this.thumb=t,t.height=22,t.scale9Grid=new egret.Rectangle(3,7,4,8),t.source="battle_bossHp1",t.width=636,t.x=3,t.y=3,t},i.labelDisplay_i=function(){var t=new eui.Label;return this.labelDisplay=t,t.height=28,t.size=18,t.text="",t.textAlign="center",t.textColor=14869218,t.verticalAlign="middle",t.width=642,t.x=0,t.y=0,t},e}(eui.Skin),generateEUI.paths["resource/skins/common/BtnSkin.exml"]=window.BtnSkin=function(t){function e(){t.call(this),this.skinParts=["iconDisplay"],this.elementsContent=[this.iconDisplay_i()]}__extends(e,t);var i=e.prototype;return i.iconDisplay_i=function(){var t=new core.UIImage;return this.iconDisplay=t,t.horizontalCenter=0,t.verticalCenter=0,t},e}(eui.Skin),generateEUI.paths["resource/skins/common/BtnSkin1.exml"]=window.BtnSkin1=function(t){function e(){t.call(this),this.skinParts=["iconDisplay","labelDisplay"],this.elementsContent=[this.iconDisplay_i(),this.labelDisplay_i()]}__extends(e,t);var i=e.prototype;return i.iconDisplay_i=function(){var t=new core.UIImage;return this.iconDisplay=t,t.horizontalCenter=0,t.verticalCenter=0,t},i.labelDisplay_i=function(){var t=new UILabel;return this.labelDisplay=t,t.horizontalCenter=0,t.size=38,t.stroke=3,t.strokeColor=5980695,t.textAlign="center",t.textColor=15855600,t.verticalCenter=0,t},e}(eui.Skin),generateEUI.paths["resource/skins/battle/pve/NormalBattleSkin.exml"]=window.NormalBattleSkin=function(t){function e(){t.call(this),this.skinParts=["diskBg","disk","diskGrp","diskRect","diskItem","bossLvTxt","bossNameTxt","bossTipBtn","bossHpBar","bossBuffList","bossPassiveList","bossSkillList","bossSkillGrp","bossGrp","playerSkillList","playerPassiveList","battleGrp","pickupBtn","pickupGrp","exitBtn","dropImg","dropGrp","exitGrp"],this.height=1280,this.width=720,this.elementsContent=[this.battleGrp_i(),this.pickupGrp_i(),this.exitGrp_i()]}__extends(e,t);var i=e.prototype;return i.battleGrp_i=function(){var t=new eui.Group;return this.battleGrp=t,t.bottom=0,t.left=0,t.right=0,t.top=0,t.touchEnabled=!1,t.elementsContent=[this.diskItem_i(),this.bossGrp_i(),this.playerSkillList_i(),this.playerPassiveList_i()],t},i.diskItem_i=function(){var t=new eui.Group;return this.diskItem=t,t.bottom=0,t.height=400,t.left=0,t.right=0,t.elementsContent=[this.diskGrp_i(),this.diskRect_i()],t},i.diskGrp_i=function(){var t=new eui.Group;return this.diskGrp=t,t.height=0,t.touchChildren=!1,t.touchEnabled=!1,t.visible=!0,t.width=0,t.x=360,t.y=205,t.elementsContent=[this.diskBg_i(),this.disk_i()],t},i.diskBg_i=function(){var t=new core.UIImage;return this.diskBg=t,t.anchorOffsetX=114,t.anchorOffsetY=114,t.height=228,t.source="battle_diskBg",t.touchEnabled=!1,t.width=228,t.x=0,t.y=0,t},i.disk_i=function(){var t=new core.UIImage;return this.disk=t,t.anchorOffsetX=46,t.anchorOffsetY=46,t.height=92,t.source="battle_disk",t.touchEnabled=!1,t.width=92,t.x=0,t.y=0,t},i.diskRect_i=function(){var t=new core.UIImage;return this.diskRect=t,t.alpha=0,t.bottom=0,t.left=0,t.right=0,t.scale9Grid=new egret.Rectangle(1,1,18,18),t.source="battle_alphaBg",t.top=0,t.visible=!0,t},i.bossGrp_i=function(){var t=new eui.Group;return this.bossGrp=t,t.height=120,t.horizontalCenter=0,t.top=218,t.width=642,t.elementsContent=[this.bossLvTxt_i(),this.bossNameTxt_i(),this.bossTipBtn_i(),this.bossHpBar_i(),this.bossBuffList_i(),this.bossSkillGrp_i()],t},i.bossLvTxt_i=function(){var t=new eui.Label;return this.bossLvTxt=t,t.height=26,t.size=26,t.text="Lv.60",t.textColor=14869218,t.width=200,t.x=2,t.y=9,t},i.bossNameTxt_i=function(){var t=new eui.Label;return this.bossNameTxt=t,t.height=30,t.size=30,t.text="杻木摧毁者",t.textAlign="right",t.textColor=14869218,t.width=300,t.x=284,t.y=2,t},i.bossTipBtn_i=function(){var t=new core.UIButton;return this.bossTipBtn=t,t.height=33,t.icon="battle_tipBtn",t.skinName="BtnSkin",t.visible=!0,t.width=31,t.x=602,t.y=0,t},i.bossHpBar_i=function(){var t=new SliderBar1;return this.bossHpBar=t,t.direction="ltr",t.height=28,t.prefix="battle_bossHp",t.skinName="BattleBossHpBarSkin",t.visible=!0,t.width=642,t.x=0,t.y=36,t},i.bossBuffList_i=function(){var t=new eui.List;return this.bossBuffList=t,t.height=30,t.itemRendererSkinName=BattleBossBuffItemSkin,t.width=318,t.x=3,t.y=71,t.layout=this._HorizontalLayout1_i(),t},i._HorizontalLayout1_i=function(){var t=new eui.HorizontalLayout;return t.gap=2,t},i.bossSkillGrp_i=function(){var t=new eui.Group;return this.bossSkillGrp=t,t.height=50,t.right=4,t.y=70,t.layout=this._HorizontalLayout4_i(),t.elementsContent=[this.bossPassiveList_i(),this.bossSkillList_i()],t},i._HorizontalLayout4_i=function(){var t=new eui.HorizontalLayout;return t.gap=5,t},i.bossPassiveList_i=function(){var t=new eui.List;return this.bossPassiveList=t,t.height=50,t.itemRendererSkinName=BattleBossPassiveItemSkin,t.x=0,t.y=0,t.layout=this._HorizontalLayout2_i(),t},i._HorizontalLayout2_i=function(){var t=new eui.HorizontalLayout;return t.gap=3,t},i.bossSkillList_i=function(){var t=new eui.List;return this.bossSkillList=t,t.height=50,t.itemRendererSkinName=BattleBossSkillItemSkin,t.x=108,t.y=0,t.layout=this._HorizontalLayout3_i(),t},i._HorizontalLayout3_i=function(){var t=new eui.HorizontalLayout;return t.gap=3,t},i.playerSkillList_i=function(){var t=new eui.List;return this.playerSkillList=t,t.bottom=347,t.height=108,t.horizontalCenter=0,t.itemRendererSkinName=BattlePlayerSkillItemSkin,t.touchEnabled=!1,t.visible=!0,t.width=276,t.layout=this._HorizontalLayout5_i(),t},i._HorizontalLayout5_i=function(){var t=new eui.HorizontalLayout;return t.gap=60,t},i.playerPassiveList_i=function(){var t=new eui.List;return this.playerPassiveList=t,t.bottom=97,t.height=200,t.itemRendererSkinName=BattlePlayerPassiveItemSkin,t.left=10,t.touchEnabled=!1,t.visible=!0,t.width=60,t.layout=this._VerticalLayout1_i(),t},i._VerticalLayout1_i=function(){var t=new eui.VerticalLayout;return t.gap=10,t},i.pickupGrp_i=function(){var t=new eui.Group;return this.pickupGrp=t,t.bottom=0,t.left=0,t.right=0,t.top=0,t.visible=!1,t.elementsContent=[this.pickupBtn_i()],t},i.pickupBtn_i=function(){var t=new core.UIButton;return this.pickupBtn=t,t.height=113,t.horizontalCenter=1,t.icon="battle_btn2",t.label="拾取",t.skinName="BtnSkin1",t.textColor=15855600,t.textSize=38,t.verticalCenter=295.5,t.width=340,t},i.exitGrp_i=function(){var t=new eui.Group;return this.exitGrp=t,t.bottom=0,t.left=0,t.right=0,t.top=0,t.visible=!1,t.x=10,t.y=10,t.elementsContent=[this.exitBtn_i(),this.dropGrp_i()],t},i.exitBtn_i=function(){var t=new core.UIButton;return this.exitBtn=t,t.height=113,t.horizontalCenter=-3,t.icon="battle_btn1",t.label="重新挑战",t.skinName="BtnSkin1",t.textColor=15855600,t.textSize=38,t.verticalCenter=295.5,t.width=340,t},i.dropGrp_i=function(){var t=new eui.Group;return this.dropGrp=t,t.height=0,t.horizontalCenter=-4,t.verticalCenter=-222,t.visible=!0,t.width=0,t.elementsContent=[this.dropImg_i()],t},i.dropImg_i=function(){var t=new core.UIImage;return this.dropImg=t,t.anchorOffsetX=166,t.anchorOffsetY=65,t.height=129,t.source="battle_drop",t.width=332,t.x=0,t.y=0,t},e}(eui.Skin),generateEUI.paths["resource/skins/common/BtnSkin2.exml"]=window.BtnSkin2=function(t){function e(){t.call(this),this.skinParts=["iconDisplay","labelDisplay"],this.elementsContent=[this.iconDisplay_i(),this.labelDisplay_i()]}__extends(e,t);var i=e.prototype;return i.iconDisplay_i=function(){var t=new core.UIImage;return this.iconDisplay=t,t.horizontalCenter=0,t.verticalCenter=0,t},i.labelDisplay_i=function(){var t=new UILabel;return this.labelDisplay=t,t.horizontalCenter=0,t.size=28,t.textAlign="center",t.textColor=15855600,t.verticalCenter=0,t},e}(eui.Skin),generateEUI.paths["resource/skins/city/CitySkin.exml"]=window.CitySkin=function(t){function e(){t.call(this),this.skinParts=["payBtn1","disconnectBtn","payBtn2","startBtn","tipBtn","diskBg","disk","diskGrp","diskRect","diskItem","closeBtn","tipGrp","tipsTxt","addressTxt","totalTxt","timesTxt1","timesTxt2"],this.height=1280,this.width=720,this.elementsContent=[this.payBtn1_i(),this.disconnectBtn_i(),this.payBtn2_i(),this.startBtn_i(),this.tipBtn_i(),this.diskItem_i(),this.tipGrp_i(),this.tipsTxt_i(),this.addressTxt_i(),this._Label1_i(),this.totalTxt_i(),this.timesTxt1_i(),this.timesTxt2_i()]}__extends(e,t);var i=e.prototype;return i.payBtn1_i=function(){var t=new core.UIButton;return this.payBtn1=t,t.height=113,t.icon="battle_btn1",t.label="1000金币",t.left=10,t.scaleX=.5,t.scaleY=.5,t.skinName="BtnSkin1",t.textColor=15855600,t.textSize=38,t.top=226,t.width=340,t.y=300,t},i.disconnectBtn_i=function(){var t=new core.UIButton;return this.disconnectBtn=t,t.height=74,t.icon="battle_btn1",t.label="断开连接",t.left=589,t.scaleX=.4,t.scaleY=.4,t.skinName="BtnSkin1",t.textColor=15855600,t.textSize=38,t.top=45,t.width=276,t.x=20,t.y=310,t},i.payBtn2_i=function(){var t=new core.UIButton;return this.payBtn2=t,t.height=113,t.icon="battle_btn1",t.label="2000金币",t.left=10,t.scaleX=.5,t.scaleY=.5,t.skinName="BtnSkin1",t.textColor=15855600,t.textSize=38,t.top=296,t.width=340,t.x=20,t.y=310,t},i.startBtn_i=function(){var t=new core.UIButton;return this.startBtn=t,t.height=113,t.horizontalCenter=0,t.icon="battle_btn1",t.label="开始战斗",t.skinName="BtnSkin1",t.textColor=15855600,t.textSize=38,t.top=390,t.width=340,t.x=581,t},i.tipBtn_i=function(){var t=new core.UIButton;return this.tipBtn=t,t.height=60,t.horizontalCenter=.5,t.icon="battle_tipBtn2",t.label="战前须知",t.skinName="BtnSkin2",t.textColor=15855600,t.textSize=28,t.top=521,t.width=317,t.x=190,t.y=290,t},i.diskItem_i=function(){var t=new eui.Group;return this.diskItem=t,t.bottom=0,t.height=400,t.left=0,t.right=0,t.touchEnabled=!1,t.visible=!0,t.elementsContent=[this.diskGrp_i(),this.diskRect_i()],t},i.diskGrp_i=function(){var t=new eui.Group;return this.diskGrp=t,t.height=0,t.touchChildren=!1,t.touchEnabled=!1,t.width=0,t.x=360,t.y=205,t.elementsContent=[this.diskBg_i(),this.disk_i()],t},i.diskBg_i=function(){var t=new core.UIImage;return this.diskBg=t,t.anchorOffsetX=114,t.anchorOffsetY=114,t.height=228,t.source="battle_diskBg",t.width=228,t.x=0,t.y=0,t},i.disk_i=function(){var t=new core.UIImage;return this.disk=t,t.anchorOffsetX=46,t.anchorOffsetY=46,t.height=92,t.source="battle_disk",t.touchEnabled=!1,t.width=92,t.x=0,t.y=0,t},i.diskRect_i=function(){var t=new core.UIImage;return this.diskRect=t,t.alpha=0,t.bottom=0,t.left=0,t.right=0,t.scale9Grid=new egret.Rectangle(1,1,18,18),t.source="city_alphaBg",t.top=0,t},i.tipGrp_i=function(){var t=new eui.Group;return this.tipGrp=t,t.bottom=0,t.left=0,t.right=0,t.top=0,t.visible=!1,t.elementsContent=[this._Rect1_i(),this._UIImage1_i(),this.closeBtn_i()],t},i._Rect1_i=function(){var t=new eui.Rect;return t.bottom=0,t.fillAlpha=.8,t.fillColor=264969,t.left=0,t.right=0,t.strokeAlpha=1,t.top=0,t.visible=!0,t},i._UIImage1_i=function(){var t=new core.UIImage;return t.height=1166,t.horizontalCenter=0,t.source="resource/uibg/battle_tip.png",t.verticalCenter=0,t.width=641,t},i.closeBtn_i=function(){var t=new core.UIButton;return this.closeBtn=t,t.height=31,t.horizontalCenter=317.5,t.icon="battle_closeBtn",t.skinName="BtnSkin",t.textColor=15855600,t.textSize=28,t.verticalCenter=-598.5,t.width=31,t},i.tipsTxt_i=function(){var t=new eui.Label;return this.tipsTxt=t,t.height=30,t.left=10,t.size=26,t.text="兑换比例:0.001TON = 1000金币",t.textAlign="left",t.verticalAlign="middle",t.width=500,t.y=141,t},i.addressTxt_i=function(){var t=new eui.Label;return this.addressTxt=t,t.height=48,t.left=10,t.size=22,t.text="钱包地址：\n未连接",t.textAlign="left",t.verticalAlign="top",t.width=703,t.x=20,t.y=80,t},i._Label1_i=function(){var t=new eui.Label;return t.height=30,t.left=10,t.size=26,t.text="当前为测试环境，请使用测试网的钱包",t.textAlign="left",t.textColor=15729411,t.verticalAlign="middle",t.width=500,t.x=20,t.y=12,t},i.totalTxt_i=function(){var t=new eui.Label;return this.totalTxt=t,t.height=30,t.left=10,t.size=26,t.text="金币:0",t.textAlign="left",t.verticalAlign="middle",t.width=500,t.y=181,t},i.timesTxt1_i=function(){var t=new eui.Label;return this.timesTxt1=t,t.height=30,t.left=190,t.size=26,t.text="成功次数:0",t.textAlign="left",t.verticalAlign="middle",t.width=400,t.y=239,t},i.timesTxt2_i=function(){var t=new eui.Label;return this.timesTxt2=t,t.height=30,t.left=190,t.size=26,t.text="成功次数:0",t.textAlign="left",t.verticalAlign="middle",t.width=400,t.x=200,t.y=309,t},e}(eui.Skin),generateEUI.paths["resource/skins/common/BtnYellowSkin.exml"]=window.BtnYellowSkin=function(t){function e(){t.call(this),this.skinParts=["scaleBg","labelDisplay"],this.elementsContent=[this.scaleBg_i(),this.labelDisplay_i()]}__extends(e,t);var i=e.prototype;return i.scaleBg_i=function(){var t=new core.UIImage;return this.scaleBg=t,t.bottom=0,t.left=0,t.right=0,t.source="btn2",t.top=0,t},i.labelDisplay_i=function(){var t=new eui.Label;return this.labelDisplay=t,t.bold=!0,t.bottom=0,t.left=0,t.right=0,t.size=30,t.textAlign="center",t.textColor=0,t.top=0,t.verticalAlign="middle",t},e}(eui.Skin),generateEUI.paths["resource/skins/load/SceneLoadBaeSkin.exml"]=window.SceneLoadBarSkin=function(t){function e(){t.call(this),this.skinParts=["thumb","eff","track"],this.height=9,this.width=6,this.elementsContent=[this._UIImage1_i(),this.thumb_i(),this.track_i()]}__extends(e,t);var i=e.prototype;return i._UIImage1_i=function(){var t=new core.UIImage;return t.bottom=0,t.left=0,t.right=0,t.scale9Grid=new egret.Rectangle(1,1,4,7),t.source="preload_barBg",t.top=0,t},i.thumb_i=function(){var t=new core.UIImage;return this.thumb=t,t.bottom=0,t.left=0,t.right=0,t.scale9Grid=new egret.Rectangle(1,1,4,7),t.source="preload_bar1",t.top=0,t},i.track_i=function(){var t=new eui.Group;return this.track=t,t.elementsContent=[this.eff_i()],t},i.eff_i=function(){var t=new core.MmeEffect;return this.eff=t,t.height=0,t.width=0,t},e}(eui.Skin),generateEUI.paths["resource/skins/load/SceneLoadSkin.exml"]=window.SceneLoadSkin=function(t){function e(){t.call(this),this.skinParts=["bg","loadBar","loadTxt","tipTxt","loadGrp"],this.height=1280,this.width=720,this.elementsContent=[this.bg_i(),this.loadGrp_i()]}__extends(e,t);var i=e.prototype;return i.bg_i=function(){var t=new core.UIImage;return this.bg=t,t.height=1335,t.horizontalCenter=0,t.source="",t.verticalCenter=0,t.width=1778,t},i.loadGrp_i=function(){var t=new eui.Group;return this.loadGrp=t,t.bottom=0,t.height=200,t.left=0,t.right=0,t.elementsContent=[this._UIImage1_i(),this.loadBar_i(),this.loadTxt_i(),this.tipTxt_i()],t},i._UIImage1_i=function(){var t=new core.UIImage;return t.bottom=0,t.height=200,t.right=0,t.source="preload_progressBg",t.width=204,t},i.loadBar_i=function(){var t=new MainLoadBar;return this.loadBar=t,t.bottom=1,t.height=9,t.left=0,t.right=0,t.skinName="SceneLoadBarSkin",t.slideDuration=0,t},i.loadTxt_i=function(){var t=new core.UIBitmapLabel;return this.loadTxt=t,t.bottom=23,t.font="progress_fnt",t.height=35,t.right=4,t.textAlign="center",t},i.tipTxt_i=function(){var t=new eui.Label;return this.tipTxt=t,t.bottom=24,t.height=24,t.horizontalCenter=0,t.size=24,t.textColor=10658466,t},e}(eui.Skin),generateEUI.paths["resource/skins/sysAlert/SysAlertItem2Skin.exml"]=window.SysAlertItem2Skin=function(t){function e(){t.call(this),this.skinParts=["c_bg","c_img","c_text","con"],this.height=40,this.minWidth=320,this.elementsContent=[this.con_i()]}__extends(e,t);var i=e.prototype;return i.con_i=function(){var t=new eui.Group;return this.con=t,t.anchorOffsetY=20,t.height=40,t.percentWidth=100,t.y=20,t.elementsContent=[this.c_bg_i(),this._Group1_i()],t},i.c_bg_i=function(){var t=new core.UIImage;return this.c_bg=t,t.anchorOffsetX=0,t.left=0,t.right=0,t.scaleX=1,t.scaleY=1,t.source="sysAlert_alertBg",t.visible=!0,t.x=0,t.y=-7,t},i._Group1_i=function(){var t=new eui.Group;return t.horizontalCenter=0,t.scaleX=1,t.scaleY=1,t.width=254,t.x=584,t.y=6,t.layout=this._HorizontalLayout1_i(),t.elementsContent=[this._Label1_i(),this.c_img_i(),this.c_text_i()],t},i._HorizontalLayout1_i=function(){var t=new eui.HorizontalLayout;return t.gap=20,t.horizontalAlign="center",t.verticalAlign="middle",t},i._Label1_i=function(){var t=new eui.Label;return t.height=22,t.size=22,t.text="获得",t.textAlign="center",t.textColor=16777215,t.verticalAlign="middle",t.y=7,t},i.c_img_i=function(){var t=new core.UIImage;return this.c_img=t,t.height=28,t.width=28,t.y=0,t},i.c_text_i=function(){var t=new eui.Label;return this.c_text=t,t.height=22,t.size=22,t.text="",t.textAlign="center",t.textColor=16777215,t.verticalAlign="middle",t.y=7,t},e}(eui.Skin),generateEUI.paths["resource/skins/sysAlert/SysAlertItem3Skin.exml"]=window.SysAlertItem3Skin=function(t){function e(){t.call(this),this.skinParts=["c_bg","c_text"],this.height=36,this.minWidth=320,this.elementsContent=[this.c_bg_i(),this.c_text_i()]}__extends(e,t);var i=e.prototype;return i.c_bg_i=function(){var t=new core.UIImage;return this.c_bg=t,t.left=0,t.right=0,t.scale9Grid=new egret.Rectangle(39,3,37,24),t.source="sysAlert_bg2",t.visible=!0,t.y=0,t},i.c_text_i=function(){var t=new eui.Label;return this.c_text=t,t.alpha=.8,t.height=18,t.horizontalCenter=0,t.minWidth=264,t.size=18,t.text="该物品只能用点券购买",t.textAlign="center",t.textColor=16777215,t.verticalAlign="middle",t.y=7,t},e}(eui.Skin),generateEUI.paths["resource/skins/sysAlert/SysAlertItem5Skin.exml"]=window.SysAlertItem5Skin=function(t){function e(){t.call(this),this.skinParts=["c_text"],this.height=18,this.minWidth=320,this.width=320,this.elementsContent=[this.c_text_i()]}__extends(e,t);var i=e.prototype;return i.c_text_i=function(){var t=new eui.Label;return this.c_text=t,t.alpha=.8,t.height=18,t.horizontalCenter=0,t.minWidth=264,t.size=18,t.text="该物品只能用点券购买",t.textAlign="center",t.textColor=3195763,t.verticalAlign="middle",t},e}(eui.Skin),generateEUI.paths["resource/skins/sysAlert/SysAlertItemSkin.exml"]=window.SysAlertItemSkin=function(t){function e(){t.call(this),this.skinParts=["c_bg","c_text","con"],this.height=40,this.minWidth=320,this.elementsContent=[this.con_i()]}__extends(e,t);var i=e.prototype;return i.con_i=function(){var t=new eui.Group;return this.con=t,t.anchorOffsetY=20,t.height=40,t.percentWidth=100,t.y=20,t.elementsContent=[this.c_bg_i(),this.c_text_i()],t},i.c_bg_i=function(){var t=new core.UIImage;return this.c_bg=t,t.left=0,t.right=0,t.scaleX=1,t.scaleY=1,t.source="sysAlert_alertBg",t.visible=!0,t.x=0,t.y=-7,t},i.c_text_i=function(){var t=new eui.Label;return this.c_text=t,t.height=22,t.horizontalCenter=0,t.minWidth=274,t.scaleX=1,t.scaleY=1,t.size=22,t.text="",t.textAlign="center",t.textColor=16777215,t.verticalAlign="middle",t.x=574,t.y=10,t},e}(eui.Skin),generateEUI.paths["resource/skins/sysAlert/SysCloseBtnSkin.exml"]=window.SysCloseBtnSkin=function(t){function e(){t.call(this),this.skinParts=[],this.height=25,this.width=25,this.elementsContent=[this._UIImage1_i()]}__extends(e,t);var i=e.prototype;return i._UIImage1_i=function(){var t=new core.UIImage;return t.source="sysAlert_close1",t.x=0,t.y=0,t},e}(eui.Skin),generateEUI.paths["resource/skins/sysAlert/SysNoticeSkin.exml"]=window.SysNoticeSkin=function(t){function e(){t.call(this),this.skinParts=["pbg7_0","c_text","txtMask","closeBtn"],this.height=54,this.width=1e3,this.elementsContent=[this.pbg7_0_i(),this.c_text_i(),this.txtMask_i(),this.closeBtn_i()],eui.Binding.$bindProperties(this,["txtMask"],[0],this.c_text,"mask")}__extends(e,t);var i=e.prototype;return i.pbg7_0_i=function(){var t=new core.UIImage;return this.pbg7_0=t,t.left=0,t.right=0,t.scale9Grid=new egret.Rectangle(226,16,74,25),t.source="sysAlert_noticeBg",t.touchEnabled=!1,t},i.c_text_i=function(){var t=new eui.Label;return this.c_text=t,t.height=30,t.size=22,t.strokeColor=0,t.textAlign="left",t.verticalAlign="middle",t.verticalCenter=0,t.width=2500,t.x=1e3,t},i.txtMask_i=function(){var t=new eui.Rect;return this.txtMask=t,t.bottom=0,t.enabled=!1,t.left=32,t.right=37,t.top=0,t},i.closeBtn_i=function(){var t=new core.UIButton;return this.closeBtn=t,t.height=25,t.right=0,t.skinName="SysCloseBtnSkin",t.verticalCenter=0,t.visible=!1,t.width=25,t},e}(eui.Skin);