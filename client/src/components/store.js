const Book_Key = "Books_Liuqiqi";

export default {
	get () {
		return JSON.parse(window.localStorage.getItem(Book_Key))||[]
	},
	set (data) {
		window.localStorage.setItem(Book_Key,JSON.stringify(data));
	}
}