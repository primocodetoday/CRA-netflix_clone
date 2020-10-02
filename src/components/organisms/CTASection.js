﻿import React from 'react';
import { CTAForm } from 'components';

const CTASection = () => {
  return (
    <CTAForm>
      <CTAForm.Text>
        Ready to watch? Enter your email to create or restart your membership.
      </CTAForm.Text>
      <CTAForm.Input placeholder="Email address" />
      <CTAForm.Button>GET STARTED</CTAForm.Button>
    </CTAForm>
  );
};

export default CTASection;
