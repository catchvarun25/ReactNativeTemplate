import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./VMDrawerView.scss";
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
    // const bottomSheetRef = useRef<BottomSheetModal>(null);

    // useImperativeHandle(ref, () => ({
    //   present: bottomSheetRef.current?.present,
    //   dismiss: bottomSheetRef.current?.dismiss,
    // }));

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

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        snapPoints={["92%"]}
        enablePanDownToClose={enableSwipeDownToDismiss}
        enableDismissOnClose={enableSwipeDownToDismiss}
        backdropComponent={renderBackdropComponent}
      >
        <View style={styles.container}>
          <View style={styles.contentContainer}>{children}</View>
          {showDismissButton && (
            <TouchableOpacity
              onPress={() => {
                if (ref && "current" in ref && ref.current?.dismiss) {
                  ref.current.dismiss();
                }
              }}
              style={styles.dismissButton}
            >
              <Text style={styles.dismissText}>{"X"}</Text>
            </TouchableOpacity>
          )}
          {bottomView && (
            <View style={styles.bottomContainer}>{bottomView}</View>
          )}
        </View>
      </BottomSheetModal>
    );
  }
);

export default VMDrawerView;
