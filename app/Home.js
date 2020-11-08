// Created by iWeb 3.0.4 local-build-20130307

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,110),url:'Home_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Home_files/stroke_1.png'},{rect:new IWRect(5,-5,110,10),url:'Home_files/stroke_2.png'},{rect:new IWRect(115,-5,10,10),url:'Home_files/stroke_3.png'},{rect:new IWRect(115,5,10,110),url:'Home_files/stroke_4.png'},{rect:new IWRect(115,115,10,10),url:'Home_files/stroke_5.png'},{rect:new IWRect(5,115,110,10),url:'Home_files/stroke_6.png'},{rect:new IWRect(-5,115,10,10),url:'Home_files/stroke_7.png'}],new IWSize(120,120))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_files/HomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');detectBrowser();Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
