import React from 'react';
import EventList from "./EventList";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillRecieveProps is deprecated',
]);

export default class App extends React.Component {
  render() {
    return (
    <EventList></EventList>
  );
  }
}
