import React from 'react';
import EventList from "./EventList";
import EventForm from "./EventForm";
import { YellowBox } from "react-native";
import { createStackNavigator } from "react-navigation";

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillRecieveProps is deprecated',
]);

export default createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Your Event'
    }),
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Your Form'
    }),
  },
});

// export default class App extends React.Component {
//   render() {
//     return (
//     <EventList></EventList>
//   );
//   }
// }
