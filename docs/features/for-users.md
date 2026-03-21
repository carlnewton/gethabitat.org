# Features for Users

::: info

Users can sign up for an account on a Habitat instance so long as the administrator has [enabled user registration](/features/for-administrators#user-registration).

:::

## Home Feed

The Home Feed is the default page that loads when a user visits a Habitat. It displays all posts ordered by date - the
most recent at the top. Older posts are loaded when scrolling down.

<div class="screenshot">
  <img src="/home-feed-mobile.png" alt="The Habitat Home Feed on a mobile device">
</div>

## Nearby Feed

The Nearby Feed displays all posts ordered by distance from the user's current location. This requires location services
to be enabled on the user's device. Posts from further away are loaded when scrolling down.

<div class="screenshot">
  <img src="/nearby-feed.png" alt="The Habitat Nearby Feed on a mobile device">
</div>

## Posting

Users can create posts with the following fields:

| Field    | Description                                                             |
| -------- | ----------------------------------------------------------------------- |
| Title    | The title of the post.                                                  |
| Body     | An optional field for providing further details of the post.            |
| Category | A selection of predefined categories [as specified by the administrator](/features/for-administrators#category-management). |
| Photos   | A user may optionally attach uploaded photos to their post.             |
| Location | Depending on the [configuration of the category](/features/for-administrators#category-management), the user may be able (or required) to use a map to place a marker to specify a location that the post represents. The marker may be placed anywhere [inside of the area of the Habitat](/features/for-administrators#setting-a-location). |

<div class="screenshot">
  <img src="/create-post.png" alt="Creating a post on a mobile device">
</div>

Users can comment on and click the heart icon on any post.

## Categories

Clicking the category link on any post will take the user to a category index page. This behaves like the
[Home Feed](#home-feed), except it will only display posts for that particular category. When logged in, a toggle
appears at the top of the feed, allowing users to prevent posts from any given category from displaying on their Home
Feed.

## Settings

Users can customise their experience and manage their account on the settings page.

| Setting             | Description                                                                      |
| ------------------- | -------------------------------------------------------------------------------- |
| Measurement units   | Overrides the [configured default measurement unit](/features/for-administrators#setting-a-location) to either kilometers or miles. |
| Change your details | Users can change their username or password at any time.                         |
| Delete your account | All posts and comments made by the user are deleted with the account.            |
| Hidden categories   | All categories hidden by the user are listed here and can be unhidden.           |

## Other

| Feature        | Description                                                                                            |
| -------------- | ------------------------------------------------------------------------------------------------------ |
| Reporting      | Users can [report](/features/for-moderators.html#report-moderation) posts and comments for moderation. |
| Notifications  | Users will be notified in the interface when they have received a comment on a post.                   |
| Moderation log | All [moderation actions](/features/for-moderators) performed on a Habitat are logged and kept for 30 days for public viewing. |
