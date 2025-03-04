const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TextBox,
		C3.Plugins.Button,
		C3.Plugins.Text,
		C3.Plugins.AJAX,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.urlencode,
		C3.Plugins.TextBox.Exps.Text,
		C3.Plugins.AJAX.Acts.Post,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.AJAX.Cnds.OnError
	];
};
self.C3_JsPropNameTable = [
	{EnterName: 0},
	{EnterScore: 0},
	{Button: 0},
	{Text: 0},
	{AJAX: 0},
	{web_app_url: 0},
	{s: 0}
];

self.InstanceType = {
	EnterName: class extends self.ITextInputInstance {},
	EnterScore: class extends self.ITextInputInstance {},
	Button: class extends self.IButtonInstance {},
	Text: class extends self.ITextInstance {},
	AJAX: class extends self.IInstance {}
}