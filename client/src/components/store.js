// const Book_Key = "Books_Liuqiqi";

export default {
	get (key) {
		return JSON.parse(window.localStorage.getItem(key))||[]
	},
	set (key,data) {
		window.localStorage.setItem(key,JSON.stringify(data));
	}
}