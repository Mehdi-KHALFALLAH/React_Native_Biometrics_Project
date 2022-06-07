import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const SCREEN = { width: width, height: height };
export const colorSchema = {
     primary: '#AB0570',
     secondary: '#590CBB',
     primaryAlpha: 'rgba(171,5,112,0)',
     secondaryAlpha: 'rgba(89,12,187,0)',
     darkPrimary: '#30001f',
     darkSecondary: '#190138',
     darkPrimaryAlpha: 'rgba(48,0,31,0)',
     darkSecondaryAlpha: 'rgba(25,1,56,0)',
     greyPrimary: '#95a5a6',
     greySecondary: '#ecf0f1',
     starsColor: '#1fb07f',
     levelColor: '#655e85',
     validColor: '#27ae60',
     errorColor: '#c0392b',
     goldColor: '#DA9C01',
     silverColor: '#0016e0',
     bronzeColor: '#f202ba'
};
export function runTiming(clock, from, to) {
     const state = {
       finished: new Value(0),
       position: new Value(from),
       time: new Value(0),
       frameTime: new Value(0),
     };
   
     const config = {
       duration: 300,
       toValue: new Value(to),
       easing: Easing.inOut(Easing.ease),
     };
   
     return block([
       cond(
         clockRunning(clock),
         [],
         startClock(clock),
       ),
       timing(clock, state, config),
       cond(state.finished, stopClock(clock)),
       state.position,
     ]);
   }
 
   export function runTiming1(clock, to) {
     const state = {
       finished: new Value(0),
       time: new Value(0),
       frameTime: new Value(0),
     };
   
     const config = {
       duration: 300,
       toValue: new Value(to),
       easing: Easing.inOut(Easing.ease),
     };
   
     return block([
       cond(
         clockRunning(clock),
         [],
         startClock(clock),
       ),
       timing(clock, state, config),
       
     ]);
   }