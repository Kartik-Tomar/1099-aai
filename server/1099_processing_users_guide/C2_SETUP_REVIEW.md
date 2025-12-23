# CHAPTER 2: SETUP/REVIEW

## Running BOR_AP_1099_WTHD_SENT_INCOMPL Query

> [!IMPORTANT]
> First, verify the Withholding Sent File Process for the prior calendar year ran before beginning the Withholding Process for this calendar year. If users do not run this process, correction files will not be accurate. If users are unsure if the process ran for the previous year, run the `BOR_AP_1099_WTHD_SENT_INCOMPL` query below to confirm.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Reporting Tools** link.
4. Select the **Query** link.
5. Select the **Query Viewer** link.
6. In the **Search by** field, enter `BOR_AP_1099_WTHD_SENT_INCOMPL` and then press the **Search** button. Users can run this query to either HTML or to MS Excel. Both formats open in a new window.
7. To run the query, enter the **SetID**.
8. Click **OK**.
9. Review report results to determine whether the `WTHD_SNT` process ran for a particular Control ID.
10. If needed, users can see last year’s control file in the report, please run the Withhold Sent Process for any outstanding Control ID (page 14). Otherwise, if no results for your SETID, skip to page 17.

## Running the Withhold Sent (WTHD_SNT) Process

The first step in the entire Withholding process is to run the Withhold Sent Process for the previous Calendar year. It is important to make sure that the data from last year is cleared from the Peoplesoft tables prior to processing the current Calendar year.

Below are step by step instructions on how to run the Withhold Sent process.

1. Click the **NavBar** icon.
2. Click **Menu** icon.
3. Select the **Suppliers** link.
4. Select the **1099/Global Withholding** link.
5. Select the **1099 Reports** link.
6. Select the **Withholding Sent File** link.
7. Enter or create a **Run Control ID**.
8. Enter parameters. The parameters for this process are:
   - **Request ID and Description**
   - **Process Frequency**: Set to “Always”
   - **SetID**
   - **Control ID**: Use the Control ID for the year in which the process is needing to be run. (e.g., `USO_2022`).
     ![Extra Image from Page 12](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288148/p15___Control_ID_Use_the_Control_ID_for_the_year_in_wh_cythnl.png)
9. Select `WTHD_SNT` process.
   ![Extra Image from Page 12](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288148/p16_Click_OK.__0AVerify_the_process_runs_to_Success_and__rckose.png)
10. Click **OK**.
11. Verify the process runs to **Success** and the Distribution says **Posted**.

## Setting Up/Reviewing Report Control Information (Required)

Withholding Report Control Information is used by the institution to set up transmitter and payer information, such as company address, phone numbers and payer numbers, suppliers and business units included in reports. Users must setup and review the Withholding Report Control Information each calendar year even if users ran Withholding Processing in PeopleSoft the previous calendar year.

Below are step by step instructions on how to run set up and review Report Control Information.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Click the **Set Up Financials/Supply Chain** link.
4. Click the **Product Related** link.
5. Click the **Procurement Options** link.
6. Click the **Withholding** link.
7. Click the **Report Control Information** link. The system navigates to the Report Control Information page.
8. Click the **Add a New Value** tab.
9. Enter the institution’s **SetID** in the SetID field.
10. Enter a new **Control ID** into the Control ID field that includes the institution and reporting calendar year, e.g., `GCSU_2023`.
    > [!WARNING]
    > DO NOT use a period instead of underscore for the Report Control. For example, the Report Control `GCSU.2023` will not produce an IRS tax file when running the 1099 Report Post process.
11. Click the **Add** button. The system navigates to the Report Control Information page and defaults to the Payor Data tab.
12. In the **Transmitter Information** box, verify the **Supplier Software Indicator** box is checked, as this checkbox must be selected for all USG institutions using PeopleSoft Financials to produce 1099-NEC and 1099-MISC IRS files and Copy B forms.
    ![Extra Image from Page 12](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288147/p18__s_tax_identification_number_in_the_Tax_ID_field.__bnybfb.png)
13. Enter the institution’s tax identification number in the **Tax ID** field. The Tax ID should be numbers only with no spaces or hyphens.
14. Enter the **Transmitter Control Code** in the Transmitter Cntl Cd field. The Transmitter code is provided by the IRS upon submission of Form 4419 (users can also use the code used in the previous calendar year).
15. Enter the **Contact Name** in the Contact Name1 field. When entering names, use the PeopleSoft Format (LastName,FirstName), using no space in between the names.
16. Enter the **Contact Email Address** in the Contact Email Address field. To enter the addresses, click on the envelope icon. Enter phone and fax numbers, click on the telephone icon.
17. In the **Payer information** box, enter the institution’s name into the **Payer Name 1** field. This is the institution’s name as known for tax purposes.
    ![Extra Image from Page 12](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288147/p19_r_the_Control_ID_in_the_Control_ID_field._ITS_reco_tlfmhe.png)
18. Enter the **Control ID** in the Control ID field. ITS recommends using a control ID comprised of the withholding calendar year being processed.
    _Example: In January 2025, users will be processing the previous Calendar Year 2024 Withholding. Therefore, the recommended Control ID would be `2024`._
19. Enter the institution’s **Payer Tax Identification** number into the Payer Tax ID field. The Payer Tax ID should contain numbers only with no spaces or hyphens.
20. Enter Address and Phone numbers for the Transmitter and the Payer. To add the addresses, click on the envelope icon. To enter phone and fax numbers, click on the telephone icon.
    ![Extra Image from Page 12](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288142/p20_Enter_Address_and_Phone_numb_0Aaddresses__click_on_t_goo7xi.png)
    ![Extra Image from Page 12](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288141/p20_Click_the_Suppliers_and_Busines_kkgxqy.png)
    ![Extra Image from Page 12](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288141/p20_rs_for_the_Transmitter_and_the_Payer._To__0Aon._To_e_blzhiq.png)
    ![Extra Image from Page 12](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288141/p20_Units_tab._jgbxnt.png)
21. Click the **Suppliers and Business Units** tab.
22. Click the **All Suppliers** checkbox to process all withholding Suppliers that are consistent with the business unit specified.
    ![Extra Image from Page 12](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288141/p21_Enter_or_search_for_the_business_unit_in_the_Busin_orrx64.png)
23. Enter or search for the business unit in the **Business Unit** field.
    > [!NOTE]
    > If the institution needs to report for more than one business unit (ex. 3600B), then click the (+) and add the second business unit.
24. Click the **Piggyback States/Numbers** tab.
25. Deselect the “Process?” checkbox for Piggyback States, as the GeorgiaFIRST model does not use the Piggyback States functionality.
    ![Extra Image from Page 12](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288136/p22_Click_the_Save_button_to_save_the_new_Withhold_Con_ekg1ak.png)
26. Click the **Save** button to save the new Withhold Control Information for the current calendar year’s 1099s.
