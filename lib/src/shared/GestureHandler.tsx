import {
  type ComposedGesture,
  GestureDetector,
  type GestureType,
} from "react-native-gesture-handler";
import {
  // convertToAffineMatrix,
  // convertToColumnMajor,
  // type Matrix4,
  type SkRect,
} from "@shopify/react-native-skia";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import {
  /*Platform, type TransformsStyle,*/ type ViewStyle,
} from "react-native";
import * as React from "react";
import { type ChartTransformState } from "../cartesian/hooks/useChartTransformState";
import { getTransformComponents /*identity4*/ } from "../utils/transform";

type GestureHandlerProps = {
  gesture: ComposedGesture | GestureType;
  dimensions: SkRect;
  transformState?: ChartTransformState;
  debug?: boolean;
};
export const GestureHandler = ({
  gesture,
  dimensions,
  transformState,
  debug = false,
}: GestureHandlerProps) => {
  const { x, y, width, height } = dimensions;
  const style = useAnimatedStyle(() => {
    return {
      position: "absolute",
      backgroundColor: debug ? "rgba(100, 200, 300, 0.4)" : "transparent",
      left: x,
      top: y,
      width,
      height,
    };
  });
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={style} />
    </GestureDetector>
  );
};
