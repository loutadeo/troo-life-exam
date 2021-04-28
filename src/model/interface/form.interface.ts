import { FormFieldsTypes } from "../enum/form_fields.enum";

export interface FormFields {
    [key: string]: { selector: string, field_type: FormFieldsTypes };
}