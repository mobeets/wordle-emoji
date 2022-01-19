
let originalText;

function copyToClipboard(val) {
  var $temp = $("<textarea>");
  var brRegex = /<br\s*[\/]?>/gi;
  $("body").append($temp);
  $temp.val(val.replace(brRegex, "\r\n")).select();
  document.execCommand("copy");
  $temp.remove();
}

function paste() {
	let gray = $('#option1').val();
	let yellow = $('#option2').val();
	let green = $('#option3').val();
	const element = $('#question');
	
	let textToReplace = element.val();
	if (originalText.length > 0) {
		textToReplace = originalText;
	} else {
		originalText = textToReplace;
	}

	const newText = textToReplace.replace(/⬜/g, gray).replace(/🟨/g, yellow).replace(/🟩/g, green);
	element.val(newText);
	copyToClipboard(newText);
	$('#output').html('Results have been copied to clipboard.');
}

function init() {
	originalText = '';
	$('.emojiable-question').emojiPicker({
	width: '300px',
	height: '200px',
	button: false
	});

	$('.emojiable-option').emojiPicker({
	width: '200px',
	height: '200px'
	});

	$('#trigger').click(function(e) {
		e.preventDefault();
		$('#question').emojiPicker('toggle');
	});

	$('#create').click(paste);
}

$(document).ready(init);