import { en as customTranslations } from '../custom/translations/en';
import { nationalitiesNames } from './nationalities';

export const en = {
    'page.header.navbar.signIn': 'Sign In',
    'page.header.navbar.trade': 'Trade',
    'page.header.navbar.wallets': 'Wallets',
    'page.header.navbar.openOrders': 'Orders',
    'page.header.navbar.history': 'History',

    'page.header.navbar.profile': 'Profile',
    'page.header.navbar.logout': 'Logout',

    'page.sidebar.group.text': 'Fee Group:',
    'page.sidebar.group.value': 'Base',

    'page.body.trade.header.market': 'Market',
    'page.body.trade.header.yours': 'Yours',

    'page.body.trade.header.markets': 'Markets',
    'page.body.trade.header.markets.content.market': 'Market',
    'page.body.trade.header.markets.content.pair': 'Pair',
    'page.body.trade.header.markets.content.price': 'Price',
    'page.body.trade.header.markets.content.last_price': 'Last Price',
    'page.body.trade.header.markets.content.change': 'Change',
    'page.body.trade.header.markets.content.search': 'Search',
    'page.body.trade.header.markets.content.volume': 'Volume',

    'page.body.trade.header.newOrder': 'Order Form',
    'page.body.trade.header.newOrder.content.tabs.buy': 'Buy',
    'page.body.trade.header.newOrder.content.tabs.sell': 'Sell',
    'page.body.trade.header.newOrder.content.orderType': 'Order Type',
    'page.body.trade.header.newOrder.content.orderType.limit': 'Limit',
    'page.body.trade.header.newOrder.content.orderType.market': 'Market',
    'page.body.trade.header.newOrder.content.price': 'Price',
    'page.body.trade.header.newOrder.content.amount': 'Amount',
    'page.body.trade.header.newOrder.content.total': 'Total',
    'page.body.trade.header.newOrder.content.available': 'Available',

    'error.order.create.minAmount': 'Amount is too low. Minimum amount is {amount} {currency}',
    'error.order.create.minPrice': 'Price is too low. Minimum price is {price} {currency}',
    'error.order.create.maxPrice': 'Price is too high. Maximum price is {price} {currency}',
    'error.order.create.available': 'Balance exceeded. Available {available} {currency}',

    'page.body.trade.header.marketDepths': 'Market Depth',
    'page.body.trade.header.marketDepths.content.price': 'Price:',
    'page.body.trade.header.marketDepths.content.volume': 'Amount:',
    'page.body.trade.header.marketDepths.content.cumulativeVolume': 'Total:',
    'page.body.trade.header.marketDepths.content.cumulativeValue': 'Estimated Value:',

    'page.body.trade.toolBar.lowest': 'Lowest 24h',
    'page.body.trade.toolBar.lastPrice': 'Last Price',
    'page.body.trade.toolBar.selectMarket': 'Select Market',
    'page.body.trade.toolBar.highest': 'Highest 24h',
    'page.body.trade.toolBar.volume': '24h Volume',
    'page.body.trade.toolBar.change': 'Change',

    'page.body.trade.header.asks': 'Asks',
    'page.body.trade.header.bids': 'Bids',
    'page.body.trade.orderbook': 'Order Book',
    'page.body.trade.orderbook.lastMarket': 'Last Market Price',
    'page.body.trade.orderbook.header.price': 'Price',
    'page.body.trade.orderbook.header.amount': 'Amount',
    'page.body.trade.orderbook.header.volume': 'Total',

    'page.body.trade.header.recentTrades': 'Recent Trades',
    'page.body.trade.header.recentTrades.content.time': 'Time',
    'page.body.trade.header.recentTrades.content.price': 'Price',
    'page.body.trade.header.recentTrades.content.amount': 'Amount',

    'page.body.trade.header.openOrders': 'Open Orders',
    'page.body.trade.header.openOrders.content.date': 'Date',
    'page.body.trade.header.openOrders.content.state': 'State',
    'page.body.trade.header.openOrders.content.price': 'Price',
    'page.body.trade.header.openOrders.content.amount': 'Amount',
    'page.body.trade.header.openOrders.content.total': 'Value',
    'page.body.trade.header.openOrders.content.filled': 'Filled',

    'page.body.wallets.estimated_value': 'Estimated Value',

    'page.body.wallets.locked': 'Locked',
    'page.body.wallets.balance': 'Balance',
    'page.body.wallets.tabs.deposit': 'Deposit',
    'page.body.wallets.tabs.deposit.ccy.message.submit': 'Submit a deposit using the following address or QR code. Your deposit will be reflected in your account after {confirmations} confirmations',
    'page.body.wallets.tabs.deposit.ccy.message.address': 'Deposit Address',
    'page.body.wallets.tabs.deposit.ccy.message.button': 'COPY',
    'page.body.wallets.tabs.deposit.ccy.message.success': 'Address copied',
    'page.body.wallets.tabs.deposit.ccy.message.error': 'Generating deposit address',

    'page.body.wallets.tabs.deposit.fiat.message1': 'Deposit using bank transfer',
    'page.body.wallets.tabs.deposit.fiat.message2': 'Please use the following credentials to initiate your bank transfer. Your deposit will be reflected in your account within 2 business days.',
    'page.body.wallets.tabs.deposit.fiat.bankName': 'Bank Name',
    'page.body.wallets.tabs.deposit.fiat.accountNumber': 'Account number',
    'page.body.wallets.tabs.deposit.fiat.accountName': 'Account name',
    'page.body.wallets.tabs.deposit.fiat.phoneNumber': 'Phone Number',
    'page.body.wallets.tabs.deposit.fiat.referenceCode': 'Your reference code',
    'page.body.wallets.table.pending': 'Pending',
    'page.body.wallets.tabs.deposit.fiat.admin': ' To initiate a fiat withdrawal, please contact administrator!',

    'page.body.wallets.tabs.withdraw': 'Withdraw',
    'page.body.wallets.tabs.withdraw.content.amount': 'Withdrawal Amount',
    'page.body.wallets.tabs.withdraw.content.code2fa': '2FA code',
    'page.body.wallets.tabs.withdraw.content.fee': 'Fee',
    'page.body.wallets.tabs.withdraw.content.total': 'Total Withdrawal Amount',
    'page.body.wallets.tabs.withdraw.content.button': 'WITHDRAW',

    'page.body.wallets.tabs.withdraw.modal.confirmation': 'Confirmation',
    'page.body.wallets.tabs.withdraw.modal.message1': 'You will receive ',
    'page.body.wallets.tabs.withdraw.modal.message2': ' on address',
    'page.body.wallets.tabs.withdraw.modal.button.cancel': 'Cancel',
    'page.body.wallets.tabs.withdraw.modal.button.withdraw': 'Withdraw',

    'page.body.wallets.tabs.withdraw.content.enable2fa': 'To withdraw you have to enable 2FA',
    'page.body.wallets.tabs.withdraw.content.enable2faButton': 'Enable 2FA',

    'success.beneficiaries.created': 'Beficiaries: successfully created',
    'success.beneficiaries.activated': 'Beficiaries: successfully activated',
    'success.beneficiaries.deleted': 'Beficiaries: successfully deleted',

    'page.body.wallets.beneficiaries.title': 'Withdraw address',
    'page.body.wallets.beneficiaries.fiat.title': 'Withdrawal details',
    'page.body.wallets.beneficiaries.dropdown.address': 'Address',
    'page.body.wallets.beneficiaries.dropdown.select': 'Select',

    'page.body.wallets.beneficiaries.dropdown.fiat.account': 'Account',
    'page.body.wallets.beneficiaries.dropdown.fiat.bankOfBeneficiary': 'Bank of Beneficiary',
    'page.body.wallets.beneficiaries.dropdown.fiat.beneficiary': 'Beneficiary',
    'page.body.wallets.beneficiaries.dropdown.fiat.description': 'Description',
    'page.body.wallets.beneficiaries.dropdown.fiat.name': 'Name',
    'page.body.wallets.beneficiaries.dropdown.fiat.fullName': 'Full Name',

    'page.body.wallets.beneficiaries.addAddress': 'Add Address',
    'page.body.wallets.beneficiaries.addAddressModal.header': 'Add new withdrawal address',

    'page.body.wallets.beneficiaries.addAddressModal.body.coinAddress': 'Blockchain Address',
    'page.body.wallets.beneficiaries.addAddressModal.body.coinBeneficiaryName': 'Beneficiary Name',
    'page.body.wallets.beneficiaries.addAddressModal.body.coinDescription': 'Description (optional)',

    'page.body.wallets.beneficiaries.addAddressModal.body.fiatName': 'Description',
    'page.body.wallets.beneficiaries.addAddressModal.body.fiatFullName': 'Full Name',
    'page.body.wallets.beneficiaries.addAddressModal.body.fiatAccountNumber': 'Account Number',
    'page.body.wallets.beneficiaries.addAddressModal.body.fiatBankName': 'Bank Name',
    'page.body.wallets.beneficiaries.addAddressModal.body.fiatBankSwiftCode': 'Bank Swift Code (optional)',
    'page.body.wallets.beneficiaries.addAddressModal.body.fiatIntermediaryBankName': 'Intermediary Bank Name (optional)',
    'page.body.wallets.beneficiaries.addAddressModal.body.fiatIntermediaryBankSwiftCode': 'Intermediary Bank Swift Code (optional)',


    'page.body.wallets.beneficiaries.addAddressModal.body.button': 'submit for confirmation',

    'page.body.wallets.beneficiaries.confirmationModal.header': 'Confirm new address',
    'page.body.wallets.beneficiaries.confirmationModal.body.text': 'We have sent you an email containing a confirmation code pin, please enter it below to save the new address:',
    'page.body.wallets.beneficiaries.confirmationModal.body.confirmationModalCode': 'Pin code',
    'page.body.wallets.beneficiaries.confirmationModal.body.button': 'confirm',

    'page.body.wallets.beneficiaries.tipAddress': 'Address',
    'page.body.wallets.beneficiaries.tipName': 'Name',
    'page.body.wallets.beneficiaries.tipDescription': 'Note',

    'page.body.openOrders.tab.all': 'All',
    'page.body.openOrders.tab.open': 'Open',
    'page.body.openOrders.header.orderType': 'Order Type',
    'page.body.openOrders.header.orderType.buy.market': 'Buy market',
    'page.body.openOrders.header.orderType.buy.limit': 'Buy limit',
    'page.body.openOrders.header.orderType.sell.market': 'Sell market',
    'page.body.openOrders.header.orderType.sell.limit': 'Sell limit',
    'page.body.openOrders.header.pair': 'Pair',
    'page.body.openOrders.header.amount': 'Amount',
    'page.body.openOrders.header.price': 'Price',
    'page.body.openOrders.header.executed': 'Executed',
    'page.body.openOrders.header.remaining': 'Remaining',
    'page.body.openOrders.header.costRemaining': 'Cost Remaining',
    'page.body.openOrders.header.status': 'Status',
    'page.body.openOrders.content.status.done': 'Executed',
    'page.body.openOrders.content.status.wait': 'Open',
    'page.body.openOrders.content.status.cancel': 'Stopped',
    'page.body.openOrders.header.button.cancelAll': 'Cancel all',

    'page.body.history.deposit': 'Deposit History',
    'page.body.history.deposit.header.txid': 'txID',
    'page.body.history.deposit.header.date': 'Date',
    'page.body.history.deposit.header.currency': 'Currency',
    'page.body.history.deposit.header.amount': 'Amount',
    'page.body.history.deposit.header.status': 'Status',
    'page.body.history.deposit.content.status.accepted': 'Accepted',
    'page.body.history.deposit.content.status.collected': 'Collected',
    'page.body.history.deposit.content.status.submitted': 'Submitted',
    'page.body.history.deposit.content.status.canceled': 'Cancelled',
    'page.body.history.deposit.content.status.rejected': 'Rejected',
    'page.body.history.deposit.content.status.skipped': 'Skipped',

    'page.body.history.withdraw': 'Withdrawal History',
    'page.body.history.withdraw.header.id': 'ID',
    'page.body.history.withdraw.header.date': 'Date',
    'page.body.history.withdraw.header.currency': 'Currency',
    'page.body.history.withdraw.header.address': 'Address',
    'page.body.history.withdraw.header.amount': 'Amount',
    'page.body.history.withdraw.header.fee': 'Fee',
    'page.body.history.withdraw.header.status': 'Status',
    'page.body.history.withdraw.content.status.prepared': 'Prepared',
    'page.body.history.withdraw.content.status.submitted': 'Submitted',
    'page.body.history.withdraw.content.status.skipped': 'Skipped',
    'page.body.history.withdraw.content.status.canceled': 'Cancelled',
    'page.body.history.withdraw.content.status.accepted': 'Accepted',
    'page.body.history.withdraw.content.status.suspected': 'Suspected',
    'page.body.history.withdraw.content.status.rejected': 'Rejected',
    'page.body.history.withdraw.content.status.processing': 'Processing',
    'page.body.history.withdraw.content.status.succeed': 'Succeed',
    'page.body.history.withdraw.content.status.failed': 'Failed',
    'page.body.history.withdraw.content.status.confirming': 'Confirming',

    'page.body.history.trade': 'Trade History',
    'page.body.history.trade.header.id': 'ID',
    'page.body.history.trade.header.date': 'Date',
    'page.body.history.trade.header.side': 'Side',
    'page.body.history.trade.content.side.buy': 'Buy',
    'page.body.history.trade.content.side.sell': 'Sell',
    'page.body.history.trade.header.market': 'Market',
    'page.body.history.trade.header.price': 'Price',
    'page.body.history.trade.header.total': 'Total',
    'page.body.history.trade.header.amount': 'Amount',
    'page.body.history.trade.header.balance': 'Balance',

    'page.body.profile.header.account': 'Profile',

    'page.body.profile.header.account.content.password': 'Password',
    'page.body.profile.header.account.content.password.button.change': 'Change',
    'page.body.profile.header.account.content.password.old': 'Old password',
    'page.body.profile.header.account.content.password.new': 'New password',
    'page.body.profile.header.account.content.password.button.save': 'Save',
    'page.body.profile.header.account.content.password.button.cancel': 'Cancel',
    'page.body.profile.header.account.content.password.conf': 'Password Confirmation',
    'page.body.profile.header.account.content.password.dont.match': 'Passwords don\'t match',
    'page.body.profile.header.account.content.password.change.success': 'Success!',
    'page.body.profile.header.account.content.password.change': 'Change password',

    'page.body.profile.header.account.content.twoFactorAuthentication': '2FA',
    'page.body.profile.header.account.content.twoFactorAuthentication.message.enable': 'Enabled',
    'page.body.profile.header.account.content.twoFactorAuthentication.message.disable': 'Disabled',
    'page.body.profile.header.account.content.twoFactorAuthentication.header': 'Google Authenticator',
    'page.body.profile.header.account.content.twoFactorAuthentication.message.1': 'Download and install Google Authenticator application from ',
    'page.body.profile.header.account.content.twoFactorAuthentication.message.or': 'or ',
    'page.body.profile.header.account.content.twoFactorAuthentication.message.2': 'Scan QR code or use secret MFA code:',
    'page.body.profile.header.account.content.twoFactorAuthentication.message.3': '* Save this secret in a secure location. This code can be used to gain 2FA access from a different device.',
    'page.body.profile.header.account.content.twoFactorAuthentication.message.mfa': 'MFA code',
    'page.body.profile.header.account.content.twoFactorAuthentication.message.4': 'Enter 2fa code from the app',
    'page.body.profile.header.account.content.twoFactorAuthentication.subHeader': '2FA code',
    'page.body.profile.header.account.content.twoFactorAuthentication.enable': 'ENABLE',
    'page.body.profile.header.account.content.twoFactorAuthentication.disable': 'DISABLE 2FA',
    'page.body.profile.header.account.content.twoFactorAuthentication.modalBody': 'Please сontact administrator to disable',
    'page.body.profile.header.account.content.twoFactorAuthentication.modalHeader': 'Two-factor authentication is enabled',

    'page.body.profile.header.account.profile': 'Profile Verification',
    'page.body.profile.header.account.profile.email.title': 'Email verified',
    'page.body.profile.header.account.profile.email.message': 'Deposit/Withdraw enabled',
    'page.body.profile.header.account.profile.phone.unverified.title': 'Phone verification',
    'page.body.profile.header.account.profile.phone.title': 'Phone verified',
    'page.body.profile.header.account.profile.phone.message': 'Deposit/Trade enabled',
    'page.body.profile.header.account.profile.identity.unverified.title': 'Identity verification',
    'page.body.profile.header.account.profile.identity.title': 'Identity verified',
    'page.body.profile.header.account.profile.identity.message': 'Withdraw enabled',

    'page.body.profile.header.referralProgram': 'Referral Link',
    'page.body.profile.content.copyLink': 'Copy',

    'page.body.profile.apiKeys.header': 'My API Keys',
    'page.body.profile.apiKeys.header.create': 'Create new',

    'page.body.profile.apiKeys.noOtp': 'Please enable Two-factor authentication',
    'page.body.profile.apiKeys.show': 'Show',
    'page.body.profile.apiKeys.noKeys': 'You have no API keys',

    'page.body.profile.apiKeys.modal.btn.show': 'Show',
    'page.body.profile.apiKeys.modal.btn.create': 'Confirm',
    'page.body.profile.apiKeys.modal.btn.copy': 'Copy',
    'page.body.profile.apiKeys.modal.btn.activate': 'Activate',
    'page.body.profile.apiKeys.modal.btn.disabled': 'Disable',
    'page.body.profile.apiKeys.modal.btn.delete': 'Delete',
    'page.body.profile.apiKeys.modal.header': '2FA Verification',
    'page.body.profile.apiKeys.modal.created_header': 'Created',
    'page.body.profile.apiKeys.modal.access_key': 'Access Key',
    'page.body.profile.apiKeys.modal.secret_key': 'Secret Key',
    'page.body.profile.apiKeys.modal.secret_key_info': 'This information will be shown only once and cannot be retrieved once lost.',
    'page.body.profile.apiKeys.modal.secret_key_store': 'Please store it properly.',
    'page.body.profile.apiKeys.modal.note': 'Note',
    'page.body.profile.apiKeys.modal.note_content': `To avoid asset loss, please do not tell your Secret Key and Private Key to others.\
 If you forget you Secret Key, please delete it and apply for a new Secret Key pair.`,
    'page.body.profile.apiKeys.modal.title': 'Enter 2fa code from the app',
    'page.body.profile.apiKeys.modal.label': '6-digit Google Authenticator code',
    'page.body.profile.apiKeys.modal.placeholder': 'Enter Code',

    'page.body.profile.apiKeys.table.header.kid': 'Kid',
    'page.body.profile.apiKeys.table.header.algorithm': 'Algorithm',
    'page.body.profile.apiKeys.table.header.state': 'State',
    'page.body.profile.apiKeys.table.header.created': 'Created',
    'page.body.profile.apiKeys.table.header.updated': 'Updated',

    'success.api_keys.fetched': 'Successfully fetched API keys',
    'success.api_keys.created': 'API key was created',
    'success.api_keys.copied.access': 'Access key was copied',
    'success.api_keys.copied.secret': 'Secret key was copied',
    'success.api_keys.updated': 'API key was updated',
    'success.api_keys.deleted': 'API key was deleted',

    'page.body.profile.header.accountActivity': 'Account Activity',
    'page.body.profile.header.accountActivity.content.date': 'Date',
    'page.body.profile.header.accountActivity.content.addressip': 'Address IP',
    'page.body.profile.header.accountActivity.content.action': 'Action',
    'page.body.profile.header.accountActivity.content.result': 'Result',
    'page.body.profile.header.accountActivity.content.userAgent': 'User Agent',

    'page.body.profile.content.action.login': 'Login',
    'page.body.profile.content.action.logout': 'Logout',
    'page.body.profile.content.action.request2fa': 'Request QR code for 2FA',
    'page.body.profile.content.action.enable2fa': 'Enable 2FA',
    'page.body.profile.content.action.login.2fa': 'Login with 2FA',
    'page.body.profile.content.action.requestPasswordReset': 'Request password reset',
    'page.body.profile.content.action.passwordReset': 'Password reset',

    'page.body.profile.content.result.succeed': 'Succeed',
    'page.body.profile.content.result.failed': 'Failed',
    'page.body.profile.content.result.denied': 'Denied',

    'page.body.kyc.phone.head': 'Verify Phone',
    'page.body.kyc.phone.enterPhone': 'Enter phone number',
    'page.body.kyc.phone.phoneNumber': 'Phone Number',
    'page.body.kyc.phone.enterCode': 'Enter confirmation code',
    'page.body.kyc.phone.code': 'SMS Code',
    'page.body.kyc.phone.send': 'SEND CODE',
    'page.body.kyc.phone.resend': 'RESEND CODE',
    'page.body.kyc.identity.firstName': 'First Name',
    'page.body.kyc.identity.lastName': 'Last Name',
    'page.body.kyc.identity.dateOfBirth': 'Date of Birth DD/MM/YYYY',
    'page.body.kyc.identity.residentialAddress': 'Residential Address',
    'page.body.kyc.identity.city': 'City',
    'page.body.kyc.identity.postcode': 'Postcode',
    'page.body.kyc.identity.nationality': 'Citizenship',
    'page.body.kyc.identity.CoR': 'Country of Residence',
    'page.body.kyc.documents.expiryDate': 'Expiration Date DD/MM/YYYY',
    'page.body.kyc.documents.drag': 'Drag and drop or browse files',
    'page.body.kyc.documents.maxFile': 'Maximum file size is 10MB',
    'page.body.kyc.documents.maxNum': 'Maximum number of files is 5',
    'page.body.kyc.documents.upload': 'Upload your Photo ID',
    'page.body.kyc.documents.select.passport': 'Passport',
    'page.body.kyc.documents.select.identityCard': 'Identity Card',
    'page.body.kyc.documents.select.driverLicense': 'Driver License',
    'page.body.kyc.documents.select.utilityBill': 'Utility Bill',
    'page.body.kyc.documents.number': ': Number',
    'page.body.kyc.documentsType': 'Document type',

    'page.body.kyc.next': 'Next',
    'page.body.kyc.submit': 'Submit',
    'page.body.kyc.head.phone': 'Phone Verification',
    'page.body.kyc.head.identity': 'Identity Verification',
    'page.body.kyc.head.document': 'Document Verification',

    'page.body.lock.oops': 'Oops!',
    'page.body.lock.expired': 'It seems your trial has expired',
    'page.body.lock.license': 'It seems your license key is invalid',
    'page.body.lock.visit': 'Visit',

    'page.footer.legalDocuments': 'Legal documents',
    'page.footer.faq': 'FAQ',

    'page.header.signIn': 'Sign In',
    'page.header.signIn.email': 'Email',
    'page.header.signIn.password': 'Password',
    'page.header.signIn.password.message.error': 'Password is invalid',
    'page.header.signIn.receiveConfirmation': 'Didn\'t receive your confirmation email?',
    'page.header.signIn.forgotPassword': 'Forgot your password?',
    'page.header.signIn.resetPassword.title': 'Reset password',
    'page.header.signIn.resetPassword.newPassword': 'New password',
    'page.header.signIn.resetPassword.repeatPassword': 'Repeat password',
    'page.header.signIn.resetPassword.button': 'Change',
    'page.header.signIn.resetPassword.error': 'Fields are empty or don`t matches',

    'page.header.signUp': 'Sign Up',
    'page.header.signUp.email': 'Email',
    'page.header.signUp.email.message.error': 'Email is invalid',
    'page.header.signUp.password': 'Password',
    'page.header.signUp.password.message.error': 'Password must contain at least 8 characters, at least one capital letter and one digit',
    'page.header.signUp.confirmPassword': 'Confirm Password',
    'page.header.signUp.confirmPassword.message.error': 'Passwords don\'t match',
    'page.header.signUp.referalCode': 'Referral Code',
    'page.header.signUp.terms': 'I have read and agree to the Terms of Service',
    'page.header.signUp.modal.header': 'VERIFY YOUR EMAIL ADDRESS',
    'page.header.signUp.modal.body': 'To complete registration, check for an ' +
                                      'email in your inbox with further ' +
                                      'instruction. If you cannot find the email, ' +
                                      'please check your spam folder',
    'page.header.signUp.modal.footer': 'OK',
    'page.resendConfirmation': 'Resend Confirmation',
    'page.forgotPassword': 'Forgot Password',
    'page.forgotPassword.message': 'Enter email to reset password',
    'page.password2fa': '2FA verification',
    'page.password2fa.message': 'Enter 2fa code from the app',
    'page.forgotPassword.email': 'Email',
    'page.forgotPassword.send': 'Send',
    'page.noDataToShow': 'There is no data to show',

    'page.modal.withdraw.success': 'Success!',
    'page.modal.withdraw.success.message.content': 'Your withdrawal request has been received',
    'page.modal.withdraw.success.button': 'OK',

    // success messages
    'success.documents.accepted': 'Documents upload was successful',
    'success.identity.accepted': 'Identity upload was successful',
    'success.withdraw.action': 'Withdrawal request was received',
    'success.otp.enabled': '2FA was enabled',
    'success.otp.disabled': '2FA was disabled',
    'success.password.changed': 'Password was changed',
    'success.password.forgot': 'Password reset link has been sent to your email',
    'success.password.changed.successfuly': 'Password was changed',
    'success.order.cancelling': 'Order is being cancelled',
    'success.order.canceled': 'Order was cancelled',
    'success.order.canceled.all': 'All orders were cancelled',
    'success.order.cancelling.all': 'All orders are being canceled',
    'success.order.created': 'Order was created',
    'success.phone.verification.send': 'Verification code was sent to your phone',
    'success.phone.confirmed': 'Your phone was confirmed',
    'success.phone.confirmation.message': 'Success!',
    'success.message.sent': 'Message was sent',
    'success.email.confirmed': 'Your email address has been successfully confirmed',

    // error messages
    // barong
    'resource.labels.private': 'Can\'t update label',
    'resource.user.no_activity': 'No activity recorded or wrong topic',
    'resource.profile.not_exist': 'User has no profile',
    'resource.profile.exist': 'Profile already exists',
    'resource.api_key.2fa_disabled': 'Only accounts with enabled 2FA alowed',
    'resource.api_key.missing_otp': 'Theaccount has enabled 2FA but OTP code is missing',
    'resource.api_key.invalid_otp': 'OTP code is invalid',
    'resource.phone.twillio': 'Something wrong with Twilio Client',
    'resource.phone.invalid_num': 'Phone number is invalid',
    'resource.phone.exists': 'Phone number was not verified. Verification code was resent.',
    'resource.phone.number_exist': 'Phone number already exists',
    'resource.phone.verification_invalid': 'Phone is not found or verification code is invalid',
    'resource.documents.limit_reached': 'Maximum number of documents already reached',
    'resource.documents.limit_will_be_reached': 'Documents amount will reach limit by this upload',
    'resource.otp.already_enabled':'2FA has been already enabled for this account',
    'resource.otp.invalid': 'OTP code is invalid',
    'resource.password.doesnt_match': 'New passwords don\'t match',
    'resource.password.prev_pass_not_correct': 'Previous password is not correct',
    'resource.password.no_change_provided': 'New password cant be the same, as old one',
    'resource.document.empty_doc_expire': 'Expiration Date is invalid',
    'password.requirements': 'Password does not meet the minimum requirements',
    'password.password.password_strength': 'Password is too weak',

    'email.taken': 'Email already have been taken',

    'identity.user.invalid_referral_format': 'Invalid referral uid format',
    'identity.user.referral_doesnt_exist': 'Referral doesn\'t exist',
    'identity.user.active_or_doesnt_exist': 'User doesn\'t exist or has already been activated',
    'identity.password.user_doesnt_exist': 'User doesn\'t exist',
    'identity.user.passwords_doesnt_match': 'Passwords don\'t match',
    'identity.user.utilized_token': 'JWT has already been used',
    'identity.session.invalid_login_params': 'Invalid Email or Password',
    'identity.session.invalid': 'Invalid Session',
    'identity.captcha.required': 'captcha_response is required',
    'identity.captcha.mandatory_fields': 'Mandatory fields must be filled in',
    'identity.session.not_active': 'Your account is not active',
    'identity.session.banned': 'Your account is banned',
    'identity.session.invalid_params': 'Invalid Email or Password',
    'identity.session.missing_otp': 'The account has enabled 2FA but OTP code is missing',
    'identity.session.invalid_otp': 'OTP code is invalid',

    'first_name.invalid': 'First name is invalid',
    'last_name.invalid': 'Last name is invalid',
    'city.invalid': 'City is invalid',
    'postcode.invalid': 'Postcode is invalid',
    'address.invalid': 'Address is invalid',
    'first_name.blank': 'First name is missing or empty',
    'last_name.blank': 'Last name is missing or empty',
    'dob.blank': 'Date of birth is invalid',
    'address.blank': 'Address is missing or empty',
    'city.blank': 'City is missing or empty',
    'country.blank': 'Country is missing or empty',
    'postcode.blank': 'Postcode.blank is missing or empty',
    'country.must have alpha2 or alpha3 format': 'Country must have alpha2 or alpha3 format',

    'totp.error': 'OTP code is invalid',

    'record.not_found': 'Record is not found',
    'jwt.decode_and_verify': 'Failed to decode and verify JWT',
    'authz.invalid_session': 'Failed to decode cookies',
    'authz.user_not_active': 'User is not active',
    'authz.invalid_signature': 'API Key header \'signature\' is invalid',
    'authz.apikey_not_active': 'API Key state is \'inactive',
    'authz.disabled_2fa': 'API Key owner has disabled 2FA',
    'authz.invalid_api_key_headers': 'Blank or missing API Key headers',
    'authz.permission_denied': 'Path is blacklisted',
    'authz.unexistent_apikey': 'X-Auth-Apikey header is invalid',
    'authz.missing_csrf_token': 'Session is invalid',
    'authz.csrf_token_mismatch': 'CSRF token is invalid',

    // validation errors
    // identity module
    'identity.user.missing_email': 'Email is missing',
    'identity.user.empty_email': 'Email is missing or empty',
    'identity.user.missing_password': 'Password is missing',
    'identity.user.empty_password': 'Password is missing or empty',
    'identity.user.missing_token': 'Token is missing',
    'identity.user.empty_token': 'Token is missing or empty',
    'identity.user.missing_reset_password_token': 'Reset password token is missing',
    'identity.user.empty_reset_password_token': 'Reset password token is missing or empty',
    'identity.user.missing_confirm_password': 'Confirm password is missing',
    'identity.user.empty_confirm_password': 'Confirm password is missing or empty',

    'identity.session.missing_emai': 'Email is missing',
    'identity.session.missing_password': 'Password is missing',
    'identity.session.invalid_captcha_format': 'Invalid captcha format',

    // resource module
    'resource.otp.missing_code': 'OTP code is missing',
    'resource.otp.empty_code': 'OTP code is missing or empty',

    'resource.labels.missing_key': 'Key is missing',
    'resource.labels.empty_key': 'Key is missing or empty',
    'resource.labels.missing_value': 'Value is missing',
    'resource.labels.empty_value': 'Value is missing or empty',

    'resource.documents.missing_doc_expire': 'Documents expiration date is missing',
    'resource.documents.empty_doc_expire': 'Documents expiration date is missing or empty',
    'resource.documents.missing_doc_type': 'Documents type is missing',
    'resource.documents.empty_doc_type': 'Documents type is missing or empty',
    'resource.documents.missing_doc_number': 'Documents number is missing',
    'resource.documents.empty_doc_number': 'Documents number is missing or empty',
    'resource.documents.missing_upload': 'Attachment is missing',


    'resource.user.missing_topic': 'Topic is missing',
    'resource.user.empty_topic': 'Topic is missing or empty',
    'resource.user.missing_old_password': 'Old password is missing',
    'resource.user.empty_old_password': 'Old password is missing or empty',
    'resource.user.missing_new_password': 'New password is missing',
    'resource.user.empty_new_password': 'New password is missing or empty',
    'resource.user.missing_confirm_password': 'Confirm password is missing',
    'resource.user.empty_confirm_password': 'Confirm password is missing or empty',

    'resource.profile.missing_first_name': 'First name is missing',
    'resource.profile.missing_last_name': 'Last name is missing',
    'resource.profile.missing_dob': 'Date of birth is missing',
    'resource.profile.missing_address': 'Address is missing',
    'resource.profile.missing_postcode': 'Postcode is missing',
    'resource.profile.missing_city': 'City is missing',
    'resource.profile.missing_country': 'Country is missing',

    'resource.api_key.missing_algorithm': 'Algorithm is missing',
    'resource.api_key.empty_algorithm': 'Algorithm is missing or empty',
    'resource.api_key.empty_kid': 'KID is missing or empty',
    'resource.api_key.empty_scope': 'Scope is missing or empty',
    'resource.api_key.missing_totp': 'TOTP code is missing',
    'resource.api_key.empty_totp': 'TOTP code is missing or empty',
    'resource.api_key.missing_kid': 'KID is missing',
    'resource.api_key.empty_state': 'State is missing or empty',

    'resource.phone.missing_phone_number': 'Phone number is missing',
    'resource.phone.empty_phone_number': 'Phone number is missing or empty',
    'resource.phone.missing_verification_code': 'Verification code is missing',
    'resource.phone.empty_verification_code': 'Verification code is missing or empty',

    // peatio
    'account.currency.doesnt_exist': 'Currency doesn\'t exist',
    'account.deposit.invalid_state': 'Deposit invalid state',
    'account.deposit.non_integer_limit': 'Value you send could not be parsed into Integer type',
    'account.deposit.invalid_limit': 'Invalid limit',
    'account.deposit.non_positive_page': 'Page value must be positive',
    'account.deposit.empty_txid': 'Txid is missing, txid is empty',
    'account.deposit_address.invalid_address_format': 'Invalid deposit address format',
    'account.deposit_address.doesnt_support_cash_address_format': 'Currency doesn\'t support cash address format',
    'account.withdraw.non_integer_limit': 'Limit Value you send could not be parsed into Integer type',
    'account.withdraw.invalid_limit': 'Invalid limit',
    'account.withdraw.non_positive_page': 'Page value must be positive',
    'account.withdraw.non_integer_otp': 'Otp value could not be parsed into Integer type',
    'account.withdraw.empty_otp': 'Otp is missing, otp is empty',
    'account.withdraw.empty_rid': 'Rid is missing, rid is empty',
    'account.withdraw.non_decimal_amount': 'Amount value you send could not be parsed into Decimal type',
    'account.withdraw.non_positive_amount': 'Amount value must be positive',
    'account.deposit.not_permitted': 'Deposits are allowed after phone verification',
    'account.withdraw.not_permitted': 'Please, pass the corresponding verification steps to withdraw funds',
    'account.withdraw.insufficient_balance': 'Account balance is insufficient',
    'account.withdraw.invalid_amount': 'Invalid withdraw amount',
    'account.withdraw.create_error': 'Failed to create withdraw',
    'account.withdraw.invalid_otp': 'Invalid otp',
    'account.withdraw.disabled_api': 'Withdrawal API is disabled',

    'market.market.doesnt_exist': 'Market doesn\'t exist',
    'market.order.invalid_state': 'Invalid deposit state',
    'market.order.invalid_limit': 'Invalid limit',
    'market.order.non_integer_limit': 'Limit value you send could not be parsed into Integer type',
    'market.trade.empty_page': 'Page is missing or empty',
    'market.order.invalid_order_by': 'Invalid order_by',
    'market.order.invalid_side': 'Invalid order side',
    'market.order.non_decimal_volume': 'Volume value you send could not be parsed into Decimal type',
    'market.order.non_positive_volume': 'Volume value must be positive',
    'market.order.invalid_type': 'Invalid order type',
    'market.order.non_decimal_price': 'Volume value you send could not be parsed into Decimal type',
    'market.order.non_positive_price': 'Volume value must be positive',
    'market.order.non_integer_id': 'Id value  you send could not be parsed into Integer type',
    'market.order.empty_id': 'Id is missing or empty',
    'market.trade.non_integer_limit': 'Limit value you send could not be parsed into Integer type',
    'market.trade.invalid_limit': 'Invalid limit',
    'market.trade.non_integer_timestamp': 'Timestamp value you send could not be parsed into Integer type',
    'market.trade.empty_timestamp': 'Timestamp is missing or empty',
    'market.trade.invalid_order_by': 'Invalid order_by',
    'market.order.insufficient_market_liquidity': 'Insufficient market liquidity ',
    'market.order.invalid_volume_or_price': 'Invalid volume or price',
    'market.order.create_error': 'Failed to create error',
    'market.order.cancel_error': 'Failed to cancel error',
    'market.order.market_order_price': 'Market order doesn\'t have price',
    'market.trade.not_permitted': 'Please, pass the corresponding verification steps to enable trading',
    'market.account.insufficient_balance': 'Account balance is insufficient',

    'public.currency.doesnt_exist': 'Currency doesn\'t exist',
    'public.currency.invalid_type': 'Invalid currency type',
    'public.market.doesnt_exist': 'Market doesn\'t exist',
    'public.order_book.non_integer_ask_limit': 'Ask limit value you send could not be parsed into Integer type',
    'public.order_book.invalid_ask_limit': 'Invlalid ask limit',
    'public.order_book.non_integer_bid_limit': 'Bid limir value you send could not be parsed into Integer type',
    'public.order_book.invalid_bid_limit': 'Invalid bid limit',
    'public.trade.non_integer_limit': 'Limit value you send could not be parsed into Integer type',
    'public.trade.invalid_limit': 'Invalid limit',
    'public.trade.non_positive_page': 'Page value must be positive',
    'public.trade.non_integer_timestamp': 'Timestamp value you send could not be parsed into Integer type',
    'public.trade.invalid_order_by': 'Invalid order by',
    'public.market_depth.non_integer_limit': 'Limit value you send could not be parsed into Integer type',
    'public.market_depth.invalid_limit': 'Invalid limit',
    'public.k_line.non_integer_period': 'Limit value you send could not be parsed into Integer type',
    'public.k_line.invalid_period': 'Invalid period',
    'public.k_line.non_integer_time_from': 'Limit value you send could not be parsed into Integer type',
    'public.k_line.empty_time_from': 'Time_from param is missing or empty',
    'public.k_line.non_integer_time_to': 'Limit value you send could not be parsed into Integer type',
    'public.k_line.empty_time_to': 'Time_to param is missing or empty',
    'public.k_line.non_integer_limit': 'Limit value you send could not be parsed into Integer type',
    'public.k_line.invalid_limit': 'Invalid limit',

    'server.internal_error': 'Internal Server Error',

    ...nationalitiesNames,
    ...customTranslations,
};
