import React, { FC } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '@/store';
import ContainerBase from '@/components/ContainerBase';

const Title: FC<TitleProps> = ({ titleName }: TitleProps) => {
  return (
    <ContainerBase id="title-container">
      <h2>{titleName}</h2>
    </ContainerBase>
  );
};

export interface TitleProps {
  titleName?: string;
}

const mapStateToProps = (state: ApplicationState): TitleProps => {
  return {
    titleName: state.title.name,
  };
};

export default connect(mapStateToProps)(Title);
