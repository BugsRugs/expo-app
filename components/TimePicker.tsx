import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';
import styles from '../assets/styles';

const TimePicker = ({ onSave }) => {
  const [availability, setAvailability] = useState(['', '', '']);

  const getDayOfWeek = (index) => {
    return moment().add(index, 'days').format('dddd');
  };

  const handleAvailabilityChange = (index, value) => {
    const updatedAvailability = [...availability];
    updatedAvailability[index] = value;
    setAvailability(updatedAvailability);
    onSave(availability);
  };

  // const saveAvailability = () => {
  //   onSave(availability);
  // };

  return (
    <View style={styles.container}>
      {availability.map((value, index) => (
        <View key={index}>
          <Text style={styles.titleText}>Availability for {getDayOfWeek(index)}</Text>
          <TextInput
            value={value}
            onChangeText={(text) => handleAvailabilityChange(index, text)}
            placeholder="Enter availability..."
            style={styles.textInput2}
          />
        </View>
      ))}
      {/* <TouchableOpacity onPress={saveAvailability} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Availability</Text>
      </TouchableOpacity> */}
    </View>
  );
};


export default TimePicker;



// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import moment from 'moment';

// const TimePicker = ({ onSave }) => {
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [timeFrames, setTimeFrames] = useState([]);

//   const showDatepicker = () => {
//     setShowDatePicker(true);
//   };

//   const handleDateChange = (event, selected) => {
//     setShowDatePicker(false);
//     if (selected) {
//       setSelectedDate(selected);
//     }
//   };

//   const addTimeFrame = () => {
//     if (timeFrames.length < 3) {
//       const nextDay = moment(selectedDate).add(timeFrames.length, 'days').toDate();
//       setTimeFrames((prevTimeFrames) => [
//         ...prevTimeFrames,
//         { date: nextDay, startTime: null, endTime: null },
//       ]);
//     }
//   };

//   const handleTimeChange = (event, selected, timeType, index) => {
//     const updatedTimeFrames = timeFrames.map((frame, i) =>
//       i === index ? { ...frame, [timeType]: selected } : frame
//     );
//     setTimeFrames(updatedTimeFrames);
//   };

//   const deleteTimeFrame = (index) => {
//     const updatedTimeFrames = timeFrames.filter((_, i) => i !== index);
//     setTimeFrames(updatedTimeFrames);
//   };

//   const saveTimeFrames = () => {
//     onSave(timeFrames);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={showDatepicker} style={styles.button}>
//         <Text style={styles.buttonText}>Select Date</Text>
//       </TouchableOpacity>
//       {showDatePicker && (
//         <DateTimePicker
//           value={selectedDate}
//           mode="date"
//           display="default"
//           onChange={handleDateChange}
//         />
//       )}
//       {timeFrames.map((frame, index) => (
//         <View key={index}>
//           <Text style={styles.dateText}>Date: {frame.date.toDateString()}</Text>
//           <TouchableOpacity
//             onPress={() => handleTimeChange(null, null, 'startTime', index)}
//             style={styles.button}
//           >
//             <Text style={styles.buttonText}>Select Start Time</Text>
//           </TouchableOpacity>
//           {frame.startTime && (
//             <DateTimePicker
//               value={frame.startTime}
//               mode="time"
//               is24Hour={true}
//               display="default"
//               onChange={(event, selected) => handleTimeChange(event, selected, 'startTime', index)}
//             />
//           )}
//           <TouchableOpacity
//             onPress={() => handleTimeChange(null, null, 'endTime', index)}
//             style={styles.button}
//           >
//             <Text style={styles.buttonText}>Select End Time</Text>
//           </TouchableOpacity>
//           {frame.endTime && (
//             <DateTimePicker
//               value={frame.endTime}
//               mode="time"
//               is24Hour={true}
//               display="default"
//               onChange={(event, selected) => handleTimeChange(event, selected, 'endTime', index)}
//             />
//           )}
//           <TouchableOpacity onPress={() => deleteTimeFrame(index)} style={styles.removeButton}>
//             <Text style={styles.removeButtonText}>Remove Time Frame</Text>
//           </TouchableOpacity>
//         </View>
//       ))}
//       <TouchableOpacity onPress={addTimeFrame} style={styles.addButton}>
//         <Text style={styles.addButtonText}>Add Time Frame</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={saveTimeFrames} style={styles.saveButton}>
//         <Text style={styles.saveButtonText}>Save Time Frames</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   dateText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   addButton: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   addButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   saveButton: {
//     backgroundColor: '#40E0D0',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   saveButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   removeButton: {
//     backgroundColor: '#FF0000',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   removeButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default TimePicker;
