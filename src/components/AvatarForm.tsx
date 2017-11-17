import * as React from 'react'
import {
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup
} from 'react-bootstrap'

import { AllTypes as AllEyeTypes, Type as EyeType } from './avatar/face/eyes'
import {
  AllTypes as AllEyebrowTypes,
  Type as EyebrowType
} from './avatar/face/eyebrow'

export interface Props {
  eyeType: EyeType
  eyebrowType: EyebrowType
  onEyeChange?: (eyeType: EyeType) => void
  onEyebrowChange?: (eyebrowType: EyebrowType) => void
}

export default class AvatarForm extends React.Component<Props> {
  render () {
    const eyeOptions = AllEyeTypes.map(type => (
      <option key={type} value={type}>
        {type}
      </option>
    ))
    const eyebrowOptions = AllEyebrowTypes.map(type => (
      <option key={type} value={type}>
        {type}
      </option>
    ))
    return (
      <Form horizontal style={{ width: '1000px', margin: '0 auto' }}>
        <FormGroup controlId='eyebrow'>
          <Col componentClass={ControlLabel} sm={2}>
            ✏️ Eyebrow
          </Col>
          <Col sm={10}>
            <FormControl
              componentClass='select'
              value={this.props.eyebrowType}
              onChange={this.onEyebrowChange}>
              {eyebrowOptions}
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup controlId='eyes'>
          <Col componentClass={ControlLabel} sm={2}>
            👁 Eyes
          </Col>
          <Col sm={10}>
            <FormControl
              componentClass='select'
              value={this.props.eyeType}
              onChange={this.onEyeChange}>
              {eyeOptions}
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type='submit'>Download</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }

  private onEyeChange = (event: React.FormEvent<FormControl>) => {
    if (this.props.onEyeChange) {
      this.props.onEyeChange(((event.target as any) as HTMLSelectElement)
        .value as EyeType)
    }
  }

  private onEyebrowChange = (event: React.FormEvent<FormControl>) => {
    if (this.props.onEyebrowChange) {
      this.props.onEyebrowChange(((event.target as any) as HTMLSelectElement)
        .value as EyebrowType)
    }
  }
}