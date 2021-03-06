import React from "react";
import { View, ScrollView, Picker } from "react-native";
import { Text, Icon, Textarea, Button, Input } from 'native-base';
import { withNamespaces } from "react-i18next";
import Styles from '../../themes/styles';

class EasySignaturePage2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      selected: undefined,
      selected2: 'key1',
      selected3: 'key2',
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  onValueChange3(value) {
    this.setState({
      selected3: value
    });
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Signature",
      headerStyle: Styles.headerStyle,
      headerTitleStyle: Styles.headerTitleStyle,
      headerTintColor: '#fff',
      headerRight: (
        <Icon name={'notifications'} style={Styles.headerRightIcon} />
      ),
    };
  };

  changeLng = () => {
    this.props.i18n.changeLanguage("pt-BR");
  };


  render() {
    const { t } = this.props;

    return (
      <ScrollView style={Styles.fullWidth}>
        <Text style={Styles.blueTopTitle}>
          Typing your name
        </Text>
        <View style={Styles.ContainerPadding42}>
          <View >
            <Input placeholder="Name"
              style={Styles.inputNormalTop0} />

            <Input placeholder="Initials"
              style={Styles.inputNormal} />

            <Picker
              style={Styles.pickerNormal}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Font Type" value="key0" />
              <Picker.Item label="Font1" value="key1" />
              <Picker.Item label="Font2" value="key2" />
            </Picker>

            <Textarea rowSpan={5} placeholder="Name"
              style={Styles.textAreaNormal}
            />

            <Textarea rowSpan={5} placeholder="Initials"
              style={Styles.textAreaNormal}
            />
          </View>
        </View>
        <Button
          onPress={() => this.props.navigation.navigate("EasySignaturePage3")}
          style={Styles.btnOrangeSave}>
          <Text style={Styles.txtOrangeSave}>
            SAVE
          </Text>
        </Button>
      </ScrollView>
    );
  }
}
export default withNamespaces()(EasySignaturePage2);
