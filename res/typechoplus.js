/* Typecho Plus
 * Created by 二笔青年 (http://clso.fun)
 * v0.6.1
 */

function selectText(target) {
	if(!target) return;
	if(target.jquery || target.length) target = target[0];

	var range, selection;
	if (window.getSelection && document.createRange) {
		selection = window.getSelection();
		range = document.createRange();
		range.selectNodeContents(target);
		selection.removeAllRanges();
		selection.addRange(range);
	} else if (document.selection && document.body.createTextRange) {
		range = document.body.createTextRange();
		range.moveToElementText(target);
		range.select();
	}
}
function insertText(tarTag, insText) {
	if(!tarTag || !insText) return;
	if(tarTag.jquery || tarTag.length) tarTag = tarTag[0];

	if (document.selection) {
		tarTag.focus();
		var sel = document.selection.createRange();
		sel.text = insText;
		sel.select();
	} else if (tarTag.selectionStart || tarTag.selectionStart == '0') {
		var startPos = tarTag.selectionStart;
		var endPos = tarTag.selectionEnd;
		var beforeValue = tarTag.value.substring(0, startPos);
		var afterValue = tarTag.value.substring(endPos, tarTag.value.length);
		tarTag.value = beforeValue + insText + afterValue;
		tarTag.selectionStart = startPos + insText.length;
		tarTag.selectionEnd = startPos + insText.length;
		tarTag.focus();
	} else {
		tarTag.value += insText;
		tarTag.focus();
	}
}

function popalert(msg, duration, style) {
	if(!duration || isNaN(duration) || duration < 1000) duration = 3000;
	style = (style === undefined) ? 'popalert-success' : ('popalert-' + style);
	$('<div class="popalert"></div>').appendTo('body').html(msg).addClass(style).show().click(function () {
		$(this).hide();
	}).delay(duration).fadeOut(function() {
		$(this).remove();
	});
}



$(".tplus-select").mouseover(function(){
	selectText(this);
});

$(".tplus-tips").click(function(){
	popalert(this.title);
});

$(".tplus-hide-title").click(function () {
	$(this.nextSibling).toggle(300);
});

$(".tplus-picbox-title").click(function () {
	$(this.nextSibling).toggle(300);
});

$(".tplus-spoiler").click(function () {
	$(this).toggleClass("revealed");
});

$(function () {
	$("audio, video").each(function(){
		try{
			if(this.getAttribute("data-volume") || this.getAttribute("volume"))
				this.volume = this.getAttribute("data-volume") ? this.getAttribute("data-volume") : this.getAttribute("volume");
			if(this.getAttribute("data-playbackrate") || this.getAttribute("playbackrate"))
				this.playbackRate = this.getAttribute("data-playbackrate") ? this.getAttribute("data-playbackrate") : this.getAttribute("playbackrate");
		}catch(e){}
	});
});

