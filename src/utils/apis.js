//auth
export const ReigsterURL = 'auth/store';
export const LoginURL = 'auth/login';
export const LogoutURL = 'user/logout';
export const ForgotURL = 'auth/sendCode';
export const VerifyOtpURL = 'auth/checkCode';
export const ResetPasswordURL = 'auth/resetPassword';

export const ChangePasswordURL = 'user/changePassword';
export const UpdateProfileURL = 'user/update';

//User Dashboard
export const AnalyticsURL = 'driver/analytics/show';
export const UpdateJobURL = id => 'driver/job/update/' + id;
export const SingleJobURL = id => 'driver/job/show/' + id;
export const AllJobsURL = 'driver/job/allJob';
export const CompletedJobsURL = 'driver/job/completed';
export const PendingJobsURL = 'driver/job/pending';

//provider Dashboard
export const NotificationsURL = 'driver/notification/show';

export const CreateChatlistURL = 'chat/create';
export const ChatlistURL = 'chat/get/list';
export const GetMessageURL = 'chat/get/message';
export const SendMessageURL = 'chat/send/message';

export const ContactUsURL = 'customer/report/store';
export const IsOnlineURL = 'driver/ChangeDriverStatus';
export const updateLatLngUrl = 'driver/updateLatLng';
