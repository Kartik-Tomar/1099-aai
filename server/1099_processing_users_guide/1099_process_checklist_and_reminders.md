## 1099 PROCESS CHECKLIST

This checklist is a guide to prepare 1099-NEC and 1099-MISC forms.

### Before beginning 1099 steps (5-28) for the current calendar year, be sure to

1. Run the BOR_AP_1099_WTHD_SENT_INCOMPL QUERY
2. Run Withhold Sent Process (WTHD_SNT) for the previous calendar year
3. Set up Report Control Information (Required for Each Year)
4. Post 1099 Withholding Transactions (AP_WTHD)

### Review

5. Review 1099 Withholding Suppliers
6. Review 1099 Withholding Vouchers by Supplier Inquiry
7. Review Payments to Withholding Suppliers – Withhold Payment Inquiry
8. Review 1099 Supplier Balances by Class
9. Run BOR_AP_1099_PMTS Query
10. Run BOR_AP_1099_JE Query
11. Run BOR_AP_1099_NONRPT_CONSISTENT Query
12. Run BOR_AP_1099_MISMATCH Query
13. Run Withholding Balances Control Report (Optional)
14. Run BOR_AP_1099_ADJUST Query
15. Run BORRY010 1099 Reportable Transactions Report: AP.070.300 (Optional)

### If any corrections or adjustments need to be made, complete steps 16-19. Otherwise, skip to step 20.

16. Enter Withholding Invoice Line Update, if needed
17. Run Withholding Update Process if adjustments were made in Step 16 or 17
18. Adjust Withholding Manually if needed – Page 51
19. Complete steps 5 - 15 after all adjustments are made to review changes

### If additional adjustments need to be made, repeat steps 16-19. Otherwise, proceed to step 20.

20. Run Withhold 1099 Report Post Job (RPT_1099), Generate Withholding Reports
    (AP_APY1099), and retrieve the IRS_001.TXT file
21. Run BORRY010 1099 Reportable Transactions Report
22. Run 1099 Withholding to Send Detail Report
23. Run BOR_AP_1099_SND_DTL_TOT Query
24. Review reports and query from steps 21 – 24

### If any adjustments need to be made, repeat steps 16-24. Otherwise, proceed to step 25.

25. Run Print 1099 Copy B Process (APCOPYB) for 1099-MISC and 1099-NEC
26. Review, Print and Send Copy B Reports
27. Send IRS_001.TXT file to IRS
28. Run Withholding Sent File Process (WTHD_SNT)

## REMINDERS

### Securing Sensitive Data

Copy B’s contains Social Security Numbers. If users do not know where to download information in a secure area, contact the institution’s Technical Support Administrator.
In addition, if users need to submit sensitive data with an ITS Helpdesk ticket, use the USG secure file transfer site MoveIT or an encrypted email to send files.

### Important Dates

Section 6071(c) of tax code requires users to file 1099’s with the IRS on or before the
following dates:
Deadline Item
January 31, 2025 1099-NEC due to IRS
March 31, 2025 1099-MISC due to IRS
