define(["backbone","model/content","view/content","view/quest/event-scene-app","view/archive/story/event-scene-view","view/archive/story/event-scene-skip-view","model/sound"],function(a,b,c,d,e,f,g){var h=d.extend({play_view:null,scene_list:null,scene_count:null,playing_scene:null,after_bgm:null,casino_flg:null,archive_flg:null,questIdList:[],initialize:function(a){this.play_view=a.play_view,this.scene_list=a.scene_list,this.isBirthdayScenario=a.isBirthdayScenario||!1,this.isStoryNpc=a.isStoryNpc||0,a.coop_flg&&(this.coop_flg=a.coop_flg),a.after_bgm&&(this.after_bgm=a.after_bgm),a.casino_flg&&(this.casino_flg=a.casino_flg),a.archive_flg&&(this.archive_flg=a.archive_flg),this.branch_npcs=a.branch_npcs||null,this.isDefendOrder=a.isDefendOrder||!1,this.isArchiveNpc=a.isArchiveNpc||!1,this.questId=a.questId||0,this.questIdList=a.questIdList||[],this.isQuestBranch=!!a.isQuestBranch,this.questBranchList=a.questBranchList||null,_.bind(d.prototype.initialize,this,a)(),null==this.scene_count&&(this.scene_count=this.scene_list.length+1),this.playing_scene=this.scene_count-this.scene_list.length,this.bind("end",this.end),g.stopBGM(),g.stopSE(),g.stopVoice()},instanceEventSceneView:function(){var a=new e({scene_id:this.scene_id,forwardFlg:this.forwardFlg,areaId:this.areaId,completed_quest_id:this.completedQuestId,event_scene_view:this,isBirthdayScenario:this.isBirthdayScenario,isStoryNpc:this.isStoryNpc,coop_flg:this.coop_flg,casino_flg:this.casino_flg,archive_flg:this.archive_flg,branch_npcs:this.branch_npcs,isDefendOrder:this.isDefendOrder,isArchiveNpc:this.isArchiveNpc,questId:this.questId,isQuestBranch:this.isQuestBranch,questBranchList:this.questBranchList});return this.addSubView(a),$(".prt-scene-num .now").addClass("num-info"+this.playing_scene),$(".prt-scene-num .all").addClass("num-info"+this.scene_count),$(".prt-scene-num").css("display","block"),a},instanceEventSceneSkipView:function(){var a=new f({scene_id:this.scene_id,forwardFlg:this.forwardFlg,areaId:this.areaId,completed_quest_id:this.completedQuestId,event_scene_view:this});return this.addSubView(a),a},end:function(){if(this.removeEvent(),this.play_view.loadStart(),0<this.scene_list.length&&!this.eventSceneView.isForceStopScenario){this.off();var a=this.scene_list.shift(),b=this.questIdList.shift();return void this.initialize({scene_id:a,forwardFlg:5,scene_list:this.scene_list,play_view:this.play_view,branch_npcs:this.branch_npcs,isArchiveNpc:this.isArchiveNpc,questId:b,questIdList:this.questIdList,isQuestBranch:this.isQuestBranch,questBranchList:this.questBranchList})}"stop"===this.after_bgm?g.stopBGM():this.after_bgm?g.playBGM("bgm/"+this.after_bgm):g.playTownBGM(),g.stopSE(),g.stopVoice(),this.trigger("sceneAllEnd"),this.content_close(),this.play_view.trigger("sceneAllEnd")},removeEvent:function(){this.effectCjs&&(this.effectCjs.removeChildren(),this.effectCjs.removeCjs(),cjs.stage.sceneEffect=cjs.stage.scenePrivate=null)}});return h});