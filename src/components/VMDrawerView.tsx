import React, { forwardRef, useCallback } from "react";
import { View, TouchableOpacity, Image, StyleProp } from "react-native";
import styles from "./VMDrawerView.scss";
import dismissIcon from "../assets/close_button.png";
import { BottomSheetBackgroundProps } from "@gorhom/bottom-sheet";

import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";

export interface IVMDrawerView {
  children: React.ReactNode;
  bottomView?: React.ReactNode;
  enableSwipeDownToDismiss?: boolean;
  showDismissButton?: boolean;
}

const VMDrawerView = forwardRef<BottomSheetModal, IVMDrawerView>(
  (props: IVMDrawerView, ref) => {
    const {
      children,
      bottomView,
      enableSwipeDownToDismiss = true,
      showDismissButton = false,
    } = props;

    const renderBackdropComponent = useCallback(
      (props: BottomSheetBackdropProps) => {
        return (
          <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
            pressBehavior="close"
          />
        );
      },
      [enableSwipeDownToDismiss]
    );

    const renderBackgroundComponent = useCallback(
      (props: BottomSheetBackgroundProps) => {
        const { style } = props;
        return (
          <View style={[style, { backgroundColor: "#fff" }]}>
            {showDismissButton && (
              <TouchableOpacity
                style={[styles.dismissButton, { borderRadius: 20 }]}
                onPress={() => {
                  if (ref && "current" in ref && ref.current?.dismiss) {
                    ref.current.dismiss();
                  }
                }}
              >
                <Image source={dismissIcon} style={styles.dismissIcon} />
              </TouchableOpacity>
            )}
          </View>
        );
      },
      [showDismissButton]
    );

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        snapPoints={["89%"]}
        enablePanDownToClose={enableSwipeDownToDismiss}
        enableDismissOnClose={enableSwipeDownToDismiss}
        backdropComponent={renderBackdropComponent}
        backgroundComponent={renderBackgroundComponent}
      >
        <View style={styles.container}>
          <View style={styles.contentContainer}>{children}</View>
          {bottomView && (
            <View style={styles.bottomContainer}>{bottomView}</View>
          )}
        </View>
      </BottomSheetModal>
    );
  }
);

export default VMDrawerView;
