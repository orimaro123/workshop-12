# React Hooks Workshop - Favorite Pokemon

## Running the app

To run the app:

> `npm i`
> `npm start`

![Screen Recording 2022-06-19 at 18 50 39](https://user-images.githubusercontent.com/65164924/174489650-3e64d3c1-c9f7-4f46-bb30-3a5ea409bd90.gif)


## Tasks
#### useClickOutside
Search for `TODO 1` in the code, currently the dialog of choosing a pokemon will close only if you'll click a pokemon or the close button, implement `useClickOutside` and use it so any click outside of the modal will close it

#### useIsMounted
Search for `TODO 2` in the code, currently your app can crush, if you'll start a search and close it before the request is over, react will try to update an unmounted component state and fail, implement `useIsMounted` to solve that

#### useDebounce
Search for `TODO 3` in the code, currently on any change of the search a request is sent, implement `useDebounce` to solve that and reduce unnecessary requests
![Screen Recording 2022-06-19 at 19 03 56](https://user-images.githubusercontent.com/65164924/174489980-daad1c80-73e4-40d2-a155-bb6b51af35be.gif)

#### useLocalStorage
Search for `TODO 4` in the code, currently after every refresh your favorite pokemomn reset to pikachu, implement `useLocalStorage` to save your choice on the local storage

#### Bonus
Search for `TODO 5` in the code, You'll see a console.log that indicates that one of our components re-renders without a reason a lot, fix those re-renders using the tools you got in the lecture.
