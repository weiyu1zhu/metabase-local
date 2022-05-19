import React, { useEffect, useMemo } from "react";
import _ from "underscore";
import { t } from "ttag";
import { connect } from "react-redux";

import Button from "metabase/core/components/Button";
import Link from "metabase/core/components/Link";
import ModalContent from "metabase/components/ModalContent";

import PersistedModels from "metabase/entities/persisted-models";

import { ModelCacheRefreshStatus } from "metabase-types/api";

import { ErrorBox } from "./ModelCacheRefreshJobs.styled";

type ModelCacheRefreshJobModalOwnProps = {
  params: {
    jobId: string;
  };
  onClose: () => void;
};

type ModelCacheRefreshJobModalStateProps = {
  onRefresh: (job: ModelCacheRefreshStatus) => void;
};

type PersistedModelsLoaderProps = {
  persistedModel: ModelCacheRefreshStatus;
  loading: boolean;
};

type ModelCacheRefreshJobModalProps = ModelCacheRefreshJobModalOwnProps &
  ModelCacheRefreshJobModalStateProps &
  PersistedModelsLoaderProps;

const mapDispatchToProps = {
  onRefresh: (job: ModelCacheRefreshStatus) =>
    PersistedModels.objectActions.refreshCache(job),
};

function ModelCacheRefreshJobModal({
  persistedModel,
  loading,
  onClose,
  onRefresh,
}: ModelCacheRefreshJobModalProps) {
  useEffect(() => {
    if (loading === false && persistedModel?.state !== "error" && onClose) {
      onClose();
    }
  }, [loading, persistedModel, onClose]);

  const footer = useMemo(() => {
    if (!persistedModel) {
      return null;
    }

    const onRefreshClick = () => onRefresh(persistedModel);

    return [
      <Button
        key="retry"
        primary
        onClick={onRefreshClick}
      >{t`Retry now`}</Button>,
      <Link
        key="edit"
        className="Button"
        to={`/model/${persistedModel.card_id}/query`}
      >{t`Edit model`}</Link>,
    ];
  }, [persistedModel, onRefresh]);

  return (
    <ModalContent title={t`Oh oh…`} onClose={onClose} footer={footer}>
      {persistedModel?.error && <ErrorBox>{persistedModel.error}</ErrorBox>}
    </ModalContent>
  );
}

export default _.compose(
  connect(null, mapDispatchToProps),
  PersistedModels.load({
    id: (state: unknown, props: ModelCacheRefreshJobModalOwnProps) =>
      props.params.jobId,
    loadingAndErrorWrapper: false,
  }),
)(ModelCacheRefreshJobModal);
