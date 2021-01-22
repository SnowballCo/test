import { Platform, Dimensions, StatusBar } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { isIphoneX, getBottomSpace } from "react-native-iphone-x-helper";

const status = getStatusBarHeight(true);
const Height = () => {
    if (Platform.OS === 'android') {
        return StatusBar.currentHeight;
    } else {
        if (isIphoneX()) {
            return Dimensions.get("window").height - status - getBottomSpace();
        } else {
            return Dimensions.get("window").height - status;
        }
    }
}

const StatusBarHeight = Height();
export default StatusBarHeight;

