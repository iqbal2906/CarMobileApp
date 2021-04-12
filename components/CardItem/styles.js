import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 16,
    color: Colors.subTitle,
  },
  subTitleCTA: {
    textDecorationLine: "underline",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonComponents: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});

export default styles;
