import React from "react";
import { ERequestStatus } from "../utility/CommonInterface";
import VMActivityLoader from "../components/VMActivityLoader";
import VMActivityFailed from "../components/VMActivityFailed";

export interface IWithLoaderComponent {
  loadingState: ERequestStatus;
}

const withLoader = <P extends IWithLoaderComponent>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithLoaderComponent = (props: P) => {
    const { loadingState } = props;
    return (
      <>
        {loadingState === ERequestStatus.INPROGRESS && <VMActivityLoader />}
        {loadingState === ERequestStatus.FAILED && <VMActivityFailed />}
        {(loadingState === ERequestStatus.SUCCESS ||
          loadingState === ERequestStatus.NONE) && (
          <WrappedComponent {...props} />
        )}
      </>
    );
  };

  return WithLoaderComponent;
};

export default withLoader;
