/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Ensures every form element has a label.
 * See base class in axe-audit.js for audit() implementation.
 */

import AxeAudit from './axe-audit.js';
import * as i18n from '../../lib/i18n/i18n.js';

const UIStrings = {
  /** Title of an accesibility audit that evaluates if all form elements have corresponding label elements. This title is descriptive of the successful state and is shown to users when no user action is required. */
  title: 'Form elements have associated labels',
  /** Title of an accesibility audit that evaluates if all form elements have corresponding label elements. This title is descriptive of the failing state and is shown to users when there is a failure that needs to be addressed. */
  failureTitle: 'Form elements do not have associated labels',
  /** Description of a Lighthouse audit that tells the user *why* they should try to pass. This is displayed after a user expands the section to see more. No character length limits. The last sentence starting with 'Learn' becomes link text to additional documentation. */
  description: 'Labels ensure that form controls are announced properly by assistive ' +
      'technologies, like screen readers. [Learn ' +
      'more about form element labels](https://dequeuniversity.com/rules/axe/4.8/label).',
};

const str_ = i18n.createIcuMessageFn(import.meta.url, UIStrings);

class Label extends AxeAudit {
  /**
   * @return {LH.Audit.Meta}
   */
  static get meta() {
    return {
      id: 'label',
      title: str_(UIStrings.title),
      failureTitle: str_(UIStrings.failureTitle),
      description: str_(UIStrings.description),
      requiredArtifacts: ['Accessibility'],
    };
  }
}

export default Label;
export {UIStrings};
