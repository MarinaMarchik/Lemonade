let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post.', likesCount: 10}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Viktor'},
                {id: 2, name: 'Anna'},
                {id: 3, name: 'Serge'},
                {id: 4, name: 'Tanya'},
                {id: 5, name: 'Ivan'}
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Ok'},
                {id: 5, message: 'So cool!'}
            ]
        }
    },
    _callSubscriber() {
        console.log('state change')
    },
    getState() {
        return this._state
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }
}

export default store;

