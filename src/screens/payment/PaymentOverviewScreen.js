import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import FeedbackButton from 'library/commons/FeedbackButton';
import Button from 'library/commons/Button';
import R from 'resources/R';
/*
 * This function Component is used to render Payemnt Overview Screen 
 * @author Didijobs <rgy713>
 */
export default function PaymentOverviewScreen() {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.container1}>
          <Pressable style={{height: 25}}>
            <Text style={styles.detail}>How are fees calculated?</Text>
          </Pressable>
          <Text style={styles.label}>Payment Overview</Text>
        </View>
        <View style={styles.container2}>
          <View style={styles.items}>
            <Text style={styles.labels}>Base job</Text>
            <Text style={styles.labels}>$150</Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.labels}>Posting fee</Text>
            <Text style={styles.labels}>+$0.25</Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.labels}>40 mi x $0.20/mi</Text>
            <Text style={styles.labels}>+$8</Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.labels}>Service fee</Text>
            <Text style={styles.labels}>+$4.60</Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.labels}>Sales tax</Text>
            <Text style={styles.labels}>+$11.25</Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.total}>Estimated total</Text>
            <Text style={styles.total}>+$1174.10</Text>
          </View>
          <View style={styles.priorityFees}>
            <Text style={styles.priorityFeesText}>
              Priority posting +15,+5hourly
            </Text>
          </View>
          <Text style={styles.priorityFeesText}>
            For card verification, we will place the estimated total in escrow,
            until the job is completed, or you cancel the job.
          </Text>
        </View>
        <View style={styles.container3}>
          <FeedbackButton />
          <View style={styles.btn}>
            <Button title={'Continue'} buttonStyle={styles.button} />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
  },
  detail: {
    color: R.colors.PRIMARI_DARK,
    fontSize: 15,
    flex: 1,
    marginLeft: 250,
  },
  label: {
    color: R.colors.PRIMARI_DARK,
    fontSize: 25,
    flex: 1,
    top: 30,
  },
  labels: {
    color: R.colors.PRIMARI_DARK,
    fontSize: 15,
    flex: 1,
    textAlign: 'center',
  },
  total: {
    color: R.colors.PRIMARI_DARK,
    fontSize: 17,
    flex: 1,
    textAlign: 'center',
  },
  container2: {
    flex: 3,
    flexDirection: 'column',
  },
  container3: {
    flex: 1,
    flexDirection: 'column',
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  priorityFees: {
    flex: 1,
    flexDirection: 'row',
    top: 40,
    justifyContent: 'center',
  },
  priorityFeesText: {
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#2ECC71',
  },
  btn: {
    marginHorizontal: 20,
  },
});
