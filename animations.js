//Final animation lists for all main objects
var jevilAnims;
var krisAnims;
var susieAnims;
var ralseiAnims;

var initAnims = function()
{
    //jevil
    var jevilDanceFrames = [
        {Img: images.jevil_jump1, Tick: 2},
        {Img: images.jevil_jump2, Tick: 2},
        {Img: images.jevil_jump3, Tick: 2},
        {Img: images.jevil_jump4, Tick: 2},
        {Img: images.jevil_jump5, Tick: 2},
        {Img: images.jevil_jump6, Tick: 2},
        {Img: images.jevil_jump7, Tick: 2},
        {Img: images.jevil_jump8, Tick: 2}
    ];

    var jevilMainFrames = [
        {Img: images.jevil_main, Tick: 1}
    ];

    var jevilLaughFrames = [
        {Img: images.jevil_main_laugh, Tick: 1}
    ];

    var jevilTiredFrames = [
        {Img: images.jevil_main_tired, Tick: 1}
    ];

    var jevilDamageFrames = [
        {Img: images.jevil_damage_body, Tick: 1}
    ];

    var jevilTeleportFrames = [
        {Img: images.jevil_tele_left1, Tick: 3},
        {Img: images.jevil_tele_left2, Tick: 3}
    ];

    var jevilTeleportReverseFrames = [
        {Img: images.jevil_tele_right1, Tick: 3},
        {Img: images.jevil_tele_right2, Tick: 3}
    ];

    //kris
    var krisActFrames = [
        {Img: images.kris_act1, Tick: 3},
        {Img: images.kris_act2, Tick: 3},
        {Img: images.kris_act3, Tick: 3},
        {Img: images.kris_act4, Tick: 3},
        {Img: images.kris_act5, Tick: 3},
        {Img: images.kris_act6, Tick: 3},
        {Img: images.kris_act7, Tick: 3},
        {Img: images.kris_act8, Tick: 3},
        {Img: images.kris_act9, Tick: 3},
        {Img: images.kris_act10, Tick: 3},
        {Img: images.kris_act11, Tick: 3}
    ];

    var krisActReadyFrames = [
        {Img: images.kris_actready1, Tick: 3},
        {Img: images.kris_actready2, Tick: 3}
    ];

    var krisAttackFrames = [
        {Img: images.kris_attack1, Tick: 3},
        {Img: images.kris_attack2, Tick: 3},
        {Img: images.kris_attack3, Tick: 3},
        {Img: images.kris_attack4, Tick: 3},
        {Img: images.kris_attack5, Tick: 3},
        {Img: images.kris_attack6, Tick: 3},
        {Img: images.kris_attack7, Tick: 3}
    ];

    var krisDefendFrames = [
        {Img: images.kris_defend1, Tick: 3},
        {Img: images.kris_defend2, Tick: 3},
        {Img: images.kris_defend3, Tick: 3},
        {Img: images.kris_defend4, Tick: 3},
        {Img: images.kris_defend5, Tick: 3},
        {Img: images.kris_defend6, Tick: 3}
    ];

    var krisIdleFrames = [
        {Img: images.kris_idle1, Tick: 3},
        {Img: images.kris_idle2, Tick: 3},
        {Img: images.kris_idle3, Tick: 3},
        {Img: images.kris_idle4, Tick: 3},
        {Img: images.kris_idle5, Tick: 3},
        {Img: images.kris_idle6, Tick: 3}
    ];

    var krisIntroFrames = [
        {Img: images.kris_intro1, Tick: 3},
        {Img: images.kris_intro2, Tick: 3},
        {Img: images.kris_intro3, Tick: 3},
        {Img: images.kris_intro4, Tick: 3},
        {Img: images.kris_intro5, Tick: 3},
        {Img: images.kris_intro6, Tick: 3},
        {Img: images.kris_intro7, Tick: 3},
        {Img: images.kris_intro8, Tick: 3},
        {Img: images.kris_intro9, Tick: 3},
        {Img: images.kris_intro10, Tick: 3},
        {Img: images.kris_intro11, Tick: 3},
        {Img: images.kris_intro12, Tick: 3},
    ];

    var krisItemFrames = [
        {Img: images.kris_item1, Tick: 3},
        {Img: images.kris_item2, Tick: 3},
        {Img: images.kris_item3, Tick: 3},
        {Img: images.kris_item4, Tick: 3},
        {Img: images.kris_item5, Tick: 3},
        {Img: images.kris_item6, Tick: 3},
        {Img: images.kris_item7, Tick: 3}
    ];

    var krisPirouetteFrames = [
        {Img: images.kris_pirouette1, Tick: 3},
        {Img: images.kris_pirouette2, Tick: 3},
        {Img: images.kris_pirouette3, Tick: 3},
        {Img: images.kris_pirouette4, Tick: 3},
        {Img: images.kris_pirouette5, Tick: 3},
        {Img: images.kris_pirouette6, Tick: 3}
    ];

    var krisAttackReadyFrames = [
        {Img: images.kris_attackready, Tick: 1}
    ];

    var krisDefeatFrames = [
        {Img: images.kris_defeat, Tick: 1}
    ];

    var krisHurtFrames = [
        {Img: images.kris_hurt, Tick: 1}
    ];

    var krisItemReadyFrames = [
        {Img: images.kris_itemready, Tick: 1}
    ];

    //susie
    var susieIntroFrames = [
        {Img: images.susie_attack1, Tick: 3},
        {Img: images.susie_attack2, Tick: 3},
        {Img: images.susie_attack3, Tick: 2},
        {Img: images.susie_attack2, Tick: 2},
        {Img: images.susie_attack1, Tick: 2}
    ];

    var susieActFrames = [
        {Img: images.susie_act1, Tick: 3},
        {Img: images.susie_act2, Tick: 3},
        {Img: images.susie_act3, Tick: 3},
        {Img: images.susie_act4, Tick: 3},
        {Img: images.susie_act5, Tick: 3},
        {Img: images.susie_act6, Tick: 3},
        {Img: images.susie_act7, Tick: 3},
        {Img: images.susie_act8, Tick: 3},
        {Img: images.susie_act9, Tick: 3},
        {Img: images.susie_act10, Tick: 3},
        {Img: images.susie_act11, Tick: 3}
    ];

    var susieAttackFrames = [
        {Img: images.susie_attack1, Tick: 3},
        {Img: images.susie_attack2, Tick: 3},
        {Img: images.susie_attack3, Tick: 3},
        {Img: images.susie_attack4, Tick: 3},
        {Img: images.susie_attack5, Tick: 3},
        {Img: images.susie_attack6, Tick: 3}
    ];

    var susieDefendFrames = [
        {Img: images.susie_defend1, Tick: 3},
        {Img: images.susie_defend2, Tick: 3},
        {Img: images.susie_defend3, Tick: 3},
        {Img: images.susie_defend4, Tick: 3},
        {Img: images.susie_defend5, Tick: 3},
        {Img: images.susie_defend6, Tick: 3}
    ];

    var susieIdleFrames = [
        {Img: images.susie_idle1, Tick: 3},
        {Img: images.susie_idle2, Tick: 3},
        {Img: images.susie_idle3, Tick: 3},
        {Img: images.susie_idle4, Tick: 3}
    ];

    var susieItemFrames = [
        {Img: images.susie_item1, Tick: 3},
        {Img: images.susie_item2, Tick: 3},
        {Img: images.susie_item3, Tick: 3},
        {Img: images.susie_item4, Tick: 3}
    ];

    var susieItemReadyFrames = [
        {Img: images.susie_itemready1, Tick: 3},
        {Img: images.susie_itemready2, Tick: 3}
    ];

    var susieSpellFrames = [
        {Img: images.susie_spell1, Tick: 3},
        {Img: images.susie_spell2, Tick: 3},
        {Img: images.susie_spell3, Tick: 3},
        {Img: images.susie_spell4, Tick: 3},
        {Img: images.susie_spell5, Tick: 3},
        {Img: images.susie_spell6, Tick: 3},
        {Img: images.susie_spell7, Tick: 3},
        {Img: images.susie_spell8, Tick: 3},
        {Img: images.susie_spell9, Tick: 3}
    ];

    var susieSpellReadyFrames = [
        {Img: images.susie_spellready1, Tick: 3},
        {Img: images.susie_spellready2, Tick: 3},
        {Img: images.susie_spellready3, Tick: 3},
        {Img: images.susie_spellready4, Tick: 3}
    ];

    var susieActReadyFrames = [
        {Img: images.susie_actready, Tick: 3}
    ];

    var susieAttackReadyFrames = [
        {Img: images.susie_attackready, Tick: 3}
    ];

    var susieDefeatFrames = [
        {Img: images.susie_defeat, Tick: 3}
    ];

    var susieHurtFrames = [
        {Img: images.susie_hurt, Tick: 3}
    ];

    //ralsei
    var ralseiActFrames = [
        {Img: images.ralsei_act1, Tick: 3},
        {Img: images.ralsei_act2, Tick: 3},
        {Img: images.ralsei_act3, Tick: 3},
        {Img: images.ralsei_act4, Tick: 3},
        {Img: images.ralsei_act5, Tick: 3},
        {Img: images.ralsei_act6, Tick: 3},
        {Img: images.ralsei_act7, Tick: 3},
        {Img: images.ralsei_act8, Tick: 3},
        {Img: images.ralsei_act9, Tick: 3},
        {Img: images.ralsei_act10, Tick: 3},
        {Img: images.ralsei_act11, Tick: 3},
        {Img: images.ralsei_act12, Tick: 3}
    ];

    var ralseiAttackFrames = [
        {Img: images.ralsei_attack1, Tick: 3},
        {Img: images.ralsei_attack2, Tick: 3},
        {Img: images.ralsei_attack3, Tick: 3},
        {Img: images.ralsei_attack4, Tick: 3},
        {Img: images.ralsei_attack5, Tick: 3},
        {Img: images.ralsei_attack6, Tick: 3},
    ];

    var ralseiIntroFrames = [
        {Img: images.ralsei_intro1, Tick: 3},
        {Img: images.ralsei_intro2, Tick: 3},
        {Img: images.ralsei_intro3, Tick: 3},
        {Img: images.ralsei_intro4, Tick: 3},
        {Img: images.ralsei_intro5, Tick: 3},
        {Img: images.ralsei_intro6, Tick: 3},
        {Img: images.ralsei_intro7, Tick: 3},
        {Img: images.ralsei_intro8, Tick: 3},
        {Img: images.ralsei_intro9, Tick: 3}
    ];

    var ralseiDefendFrames = [
        {Img: images.ralsei_defend1, Tick: 3},
        {Img: images.ralsei_defend2, Tick: 3},
        {Img: images.ralsei_defend3, Tick: 3},
        {Img: images.ralsei_defend4, Tick: 3},
        {Img: images.ralsei_defend5, Tick: 3},
        {Img: images.ralsei_defend6, Tick: 3},
        {Img: images.ralsei_defend7, Tick: 3},
        {Img: images.ralsei_defend8, Tick: 3}
    ];

    var ralseiIdleFrames = [
        {Img: images.ralsei_idle1, Tick: 3},
        {Img: images.ralsei_idle2, Tick: 3},
        {Img: images.ralsei_idle3, Tick: 3},
        {Img: images.ralsei_idle4, Tick: 3},
        {Img: images.ralsei_idle5, Tick: 3}
    ];

    var ralseiItemFrames = [
        {Img: images.ralsei_item1, Tick: 3},
        {Img: images.ralsei_item2, Tick: 3},
        {Img: images.ralsei_item3, Tick: 3},
        {Img: images.ralsei_item4, Tick: 3},
        {Img: images.ralsei_item5, Tick: 3},
        {Img: images.ralsei_item6, Tick: 3},
        {Img: images.ralsei_item7, Tick: 3},
        {Img: images.ralsei_item8, Tick: 3}
    ];

    var ralseiSpellFrames = [
        {Img: images.ralsei_spell1, Tick: 3},
        {Img: images.ralsei_spell2, Tick: 3},
        {Img: images.ralsei_spell3, Tick: 3},
        {Img: images.ralsei_spell4, Tick: 3},
        {Img: images.ralsei_spell5, Tick: 3},
        {Img: images.ralsei_spell6, Tick: 3},
        {Img: images.ralsei_spell7, Tick: 3},
        {Img: images.ralsei_spell8, Tick: 3},
        {Img: images.ralsei_spell9, Tick: 3},
        {Img: images.ralsei_spell10, Tick: 3},
    ];

    var ralseiSpellReadyFrames = [
        {Img: images.ralsei_spellready1, Tick: 3},
        {Img: images.ralsei_spellready2, Tick: 3},
        {Img: images.ralsei_spellready3, Tick: 3},
        {Img: images.ralsei_spellready4, Tick: 3},
    ];

    var ralseiActReadyFrames = [
        {Img: images.ralsei_actready, Tick: 3}
    ];

    var ralseiAttackReadyFrames = [
        {Img: images.ralsei_attackready, Tick: 3}
    ];

    var ralseiDefeatFrames = [
        {Img: images.ralsei_defeat, Tick: 3}
    ];
    
    var ralseiItemReadyFrames = [
        {Img: images.ralsei_itemready, Tick: 3}
    ];

    //setup final anim list
    jevilAnims = [
        {Name: "Dance", Frames: jevilDanceFrames, Type: loopTypes.LOOP, Exit: null},
        {Name: "Main", Frames: jevilMainFrames, Type: loopTypes.STILL, Exit: null},
        {Name: "Main_Laugh", Frames: jevilLaughFrames, Type: loopTypes.STILL, Exit: null},
        {Name: "Main_Tired", Frames: jevilTiredFrames, Type: loopTypes.STILL, Exit: null},
        {Name: "Teleport", Frames: jevilTeleportFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Teleport_Reverse", Frames: jevilTeleportReverseFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Damage_Body", Frames: jevilDamageFrames, Type: loopTypes.STILL, Exit: null},
    ];

    krisAnims = 
    [
        {Name: "Act", Frames: krisActFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Act_Ready", Frames: krisActReadyFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Attack", Frames: krisAttackFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Defend", Frames: krisDefendFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Idle", Frames: krisIdleFrames, Type: loopTypes.LOOP, Exit: null},
        {Name: "Intro", Frames: krisIntroFrames, Type: loopTypes.SINGLE, Exit: "Idle"},
        {Name: "Item", Frames: krisItemFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Pirouette", Frames: krisPirouetteFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Attack_Ready", Frames: krisAttackReadyFrames, Type: loopTypes.STILL, Exit: null},
        {Name: "Defeat", Frames: krisDefeatFrames, Type: loopTypes.STILL, Exit: null},
        {Name: "Hurt", Frames: krisHurtFrames, Type: loopTypes.STILL, Exit: null},
        {Name: "Item_Ready", Frames: krisItemReadyFrames, Type: loopTypes.STILL, Exit: null}
    ];

    susieAnims = 
    [
        {Name: "Intro", Frames: susieIntroFrames, Type: loopTypes.SINGLE, Exit: "Idle"},
        {Name: "Act", Frames: susieActFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Attack", Frames: susieAttackFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Defend", Frames: susieDefendFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Idle", Frames: susieIdleFrames, Type: loopTypes.LOOP, Exit: null},
        {Name: "Item", Frames: susieItemFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Item_Ready", Frames: susieItemReadyFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Spell", Frames: susieSpellFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Spell_Ready", Frames: susieSpellReadyFrames, Type: loopTypes.LOOP, Exit: null},
        {Name: "Act_Ready", Frames: susieActReadyFrames, Type: loopTypes.STILL, Exit: null},
        {Name: "Attack_Ready", Frames: susieAttackReadyFrames, Type: loopTypes.STILL, Exit: null},
        {Name: "Defeat", Frames: susieDefeatFrames, Type: loopTypes.STILL, Exit: null},
        {Name: "Hurt", Frames: susieHurtFrames, Type: loopTypes.STILL, Exit: null}
    ];

    ralseiAnims = [
        {Name: "Intro", Frames: ralseiIntroFrames, Type: loopTypes.SINGLE, Exit: "Idle"},
        {Name: "Act", Frames: ralseiActFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Attack", Frames: ralseiAttackFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Defend", Frames: ralseiDefendFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Idle", Frames: ralseiIdleFrames, Type: loopTypes.LOOP, Exit: null},
        {Name: "Item", Frames: ralseiItemFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Item_Ready", Frames: ralseiItemReadyFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Spell", Frames: ralseiSpellFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Spell_Ready", Frames: ralseiSpellReadyFrames, Type: loopTypes.LOOP, Exit: null},
        {Name: "Act_Ready", Frames: ralseiActReadyFrames, Type: loopTypes.STILL, Exit: null},
        {Name: "Attack_Ready", Frames: ralseiAttackReadyFrames, Type: loopTypes.STILL, Exit: null},
        {Name: "Defeat", Frames: ralseiDefeatFrames, Type: loopTypes.STILL, Exit: null}
    ];
}

var setSingleSpriteImg = function(img)
{
    var anim = [{Name: "sprite", Frames: [{Img: img, Tick: 1}], Type: loopTypes.SINGLE, Exit: null}];
    return anim;
}