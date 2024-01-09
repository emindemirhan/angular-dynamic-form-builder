import { DynamicFormBuilder } from '../modules/DynamicFormBuilder';

export const FormContent: DynamicFormBuilder = {
  formTitle: 'Dynamic Form Builder',
  saveButtonTitle: 'Register',
  resetButtonTitle: 'Reset Form',
  formControls: [
    {
      type: 'section',
      label: 'Personal Information',
      fields: [
        {
          type: 'text',
          label: 'First Name',
          name: 'firstName',
          validators: [
            {
              validatorName: 'required',
              required: true,
              message: '* First name is required.',
            },
          ],
        },
        {
          type: 'text',
          label: 'Last Name',
          name: 'lastName',
          validators: [
            {
              validatorName: 'required',
              required: true,
              message: '* Last name is required.',
            },
          ],
        },
        {
          type: 'email',
          label: 'Email',
          name: 'email',
          validators: [
            {
              validatorName: 'required',
              required: true,
              message: '* Email name is required.',
            },
            {
              validatorName: 'pattern',
              pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$',
              message: 'Please enter a valid email address. ',
            },
          ],
        },
        {
          type: 'date',
          label: 'Date of Birth',
          name: 'dateOfBirth',
        },
      ],
    },
    {
      type: 'section',
      label: 'Contact Information',
      fields: [
        {
          type: 'text',
          label: 'Phone Number',
          name: 'phoneNumber',
          mask: '(000) 000 00 00',
        },
        {
          type: 'select',
          label: 'Country',
          name: 'country',
          options: [
            {
              value: 'US',
              label: 'United States',
            },
            {
              value: 'UK',
              label: 'United Kingdom',
            },
            {
              value: 'CA',
              label: 'Canada',
            },
          ],
        },
        {
          type: 'checkbox',
          label: 'Subscribe to newsletter',
          name: 'subscribe',
        },
      ],
    },
    {
      type: 'section',
      label: 'Additional Information',
      fields: [
        {
          type: 'textarea',
          label: 'Bio',
          name: 'bio',
        },
        {
          type: 'dynamic',
          label: 'Skills',
          name: 'skills',
          options: [
            {
              value: 'programming',
              label: 'Programming',
            },
            {
              value: 'design',
              label: 'Design',
            },
            {
              value: 'writing',
              label: 'Writing',
            },
          ],
        },
      ],
    },
  ],
};
