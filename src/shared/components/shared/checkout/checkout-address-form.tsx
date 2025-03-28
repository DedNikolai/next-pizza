'use client';

import React from 'react';
import { WhiteBlock } from '../white-block';
// import { FormTextarea } from '../form';
// import { AdressInput } from '../address-input';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorText } from '../error-text';
import { FormTextarea } from '../form/form-textarea';
import { AdressInput } from '../address-input';

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  const { control, register } = useFormContext();


  return (
    <WhiteBlock title="3. Адрес доставки" className={className}>
      <div className="flex flex-col gap-5">
        {/* <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <>
              <AdressInput onChange={field.onChange} />
              {fieldState.error?.message && <ErrorText text={fieldState.error.message} />}
            </>
          )}
        /> */}

        <FormTextarea
          {...register('address')}
          id="adress"
          className="text-base"
          placeholder="Adress"
          rows={5}
        />
      </div>
    </WhiteBlock>
  );
};