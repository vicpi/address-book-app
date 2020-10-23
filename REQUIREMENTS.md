# Address Book App

This is a fictional address book app, where you can search for users addresses and personal information. The app should display a list of users for clients to browse and get personal information for a selected user.

### Home page (browse with search)

- the page should be located on the root url `/`
- display the users in a grid.
- each user has
  - a `picture.thumbnail` field, 
  - a `name.first` field,
  - a `name.last` field,
  - a `name.username` field,
  - a `email` field,
- the user's grid should automatically load more users as you scroll down.
- the database is under high load due to the growing demand for users, so please display an animated "loading..." message while the visitor waits.
- to improve the user's experience, we should always pre-emptively fetch the next batch of users in advance, making use of idle time. But they still should not be displayed until the visitor has scrolled to the bottom of the user's grid.
- max length of the catalog is 1000
- next batch size of users is 50
- when the visitor reaches the end and there are no more users to display, show the message "end of users catalog".

### Details modal

- when visitor clicks on the specific user in the row (can also be a button or an icon in a row), the modal with additional info should open.
- each detail modal should have
  - a ‘location.street’ field,
  - a ‘location.city’ field,
  - a ‘location.state’ field,
  - a ‘location.postcode’ field, - a ‘phone’ field,
  - a ‘cell’ field,
- modal should be closable so that visitor can browse/search on.

### Search

- display user search on top of the app.
- search field should be case insensitive and should filter the results by
`name.first + name.last`.
- when the user scrolls down, the search should follow the screen so that it is always
visible.
- search should filter all visible users and show only those which match the search string.

### Users API

- please read the documentation on the https://randomuser.me, and get users data from there.

### Settings page

- on different URL, for example, `/settings`, we should have settings page.
- here the visitor can set, from which nationalities users are fetched for browsing/searching.
Possible choices should be: CH, ES, FR, GB.
- there should be a button, link or something implemented so that visitors can access
settings page as also go back to search/browse page.
- settings should affect the home page and fetch the users based on selected nationality.
Settings should be affected without page reloading.

### Unit tests

- it is desirable to have at least 1 unit test for 1 component.
- this component should be tested with populated data while tested.
