import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Button from 'library/commons/Button';
import Accordian from 'library/commons/Accordian';
import Modal from 'react-native-modal';
import R from 'resources/R';
import JobApi from '../../datalib/services/job.api';
import {useSelector, useDispatch} from 'react-redux';
import {getSkills} from '../../store/actions/jobActions';
/*
 * This function is used to print skills
 * @author Didijobs <rgy713>
 */
const Skills = ({
  isVisible,
  onModalClose,
  updateSkills,
  defaultValues = [],
}) => {
  const dispatch = useDispatch();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const skills = useSelector(state => state?.job.jobSkills);
  // if (skill) {
  //   setSkills(skill);
  // }
  useEffect(() => {
    dispatch(getSkills());
  }, [dispatch]);
  useEffect(() => {
    if (defaultValues) {
      setSelectedSkills(defaultValues);
    }
  });
  const handleOnSubmit = () => {
    onModalClose && onModalClose(false);
    updateSkills && updateSkills(selectedSkills);
  };
  const onSkillChange = skills => {
    setSelectedSkills(skills);
  };
  return (
    <Modal
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={e => {
        onModalClose(false);
      }}
      onBackdropPress={e => {
        onModalClose(false);
      }}
      style={styles.modalContainer}>
      <View style={styles.modalInnerContainer}>
        <View style={styles.backgroundColor}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>Skills</Text>
          </View>

          <View style={styles.limitScroll}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {skills.map((item, index) => (
                <Accordian
                  key={`accordion_${index}`}
                  title={item.title}
                  data={item.skill}
                  onSkillChange={onSkillChange}
                  selectedSkills={selectedSkills}
                />
              ))}
            </ScrollView>
          </View>
          <View style={styles.btncontainer}>
            <Button title={'Confirm'} onPress={handleOnSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Skills;

const styles = StyleSheet.create({
  modalHeader: {
    marginBottom: 20,
  },
  modalHeaderText: {
    textAlign: 'center',
    fontFamily: R.fonts.Bold,
    fontSize: R.fontSize.L,
  },
  limitScroll: {height: '75%', marginBottom: 10},
  closeBtn: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  btncontainer: {},

  messageText: {
    fontSize: 50,
    marginBottom: 40,
    // fontFamily: R.fonts.LatoBlack,
    textAlign: 'center',
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'white',
  },
  modalWraper: {backgroundColor: 'rgba(0,0,0,0.5)', flex: 1},
  backgroundColor: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  skillsMain: {
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
  },
  fields: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt: {
    color: R.colors.PRIMARI_DARK,
    fontSize: 16,
  },
  checkBox: {
    marginRight: 30,
  },
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  modal: {
    backgroundColor: 'white',
  },
  modalInnerContainer: {
    backgroundColor: 'white',
    minHeight: 450,
    borderRadius: 20,
    justifyContent: 'space-between',
    padding: 15,
  },
});
