import React from 'react';
import {EvilIcons, Feather, Ionicons} from '.';
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Foundation,
  SimpleLineIcons,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from './vectorIcons';
const color = '#000';
const ArrowRight = props => <AntDesign name={'arrowright'} {...props} />;
const PhoneIcon = props => <Feather name={'phone'} {...props} />;
const ChevronRight = props => <Entypo name={'chevron-right'} {...props} />;
const ChevronLeft = props => <Entypo name={'chevron-left'} {...props} />;
const PencilIcon = props => <EvilIcons name={'pencil'} {...props} />;
const PlusIcon = props => <AntDesign name={'plus'} {...props} />;
const HomeIcon = props => <FontAwesome name={'home'} {...props} />;
const FlagIcon = props => <MaterialIcons name={'flag'} {...props} />;
const CompassIcon = props => <FontAwesome5 name={'compass'} {...props} />;
const BookIcon = props => <FontAwesome5 name={'book'} {...props} />;
const BackIcon = props => <FontAwesome5 name={'arrow-left'} {...props} />;
const MenuIcon = props => <Entypo name={'menu'} {...props} />;
const UserIcon = props => <FontAwesome5 name={'user-alt'} {...props} />;
const VideoIcon = props => <FontAwesome5 name={'video'} {...props} />;
const PenIcon = props => <FontAwesome5 name={'pen-square'} {...props} />;
const SunIcon = props => <Foundation name={'sheriff-badge'} {...props} />;
const HelpIcon = props => <Entypo name={'help'} {...props} />;
const KeyIcon = props => <Ionicons name={'key-outline'} {...props} />;
const SendIcon = props => <Ionicons name={'send-outline'} {...props} />;
const HeadphoneIcon = props => <MaterialIcons name={'headset'} {...props} />;
const FileIcon = props => <FontAwesome name={'file-text'} {...props} />;
const UpCircleIcon = props => <AntDesign name={'upsquare'} {...props} />;
const DownCircleIcon = props => <AntDesign name={'downsquare'} {...props} />;
const NotificationsIcon = props => (
  <FontAwesome name={'bell-slash'} {...props} />
);
const PinIcon = props => <MaterialIcons {...props} name="push-pin" />;
const ChatIcon = props => (
  <MaterialCommunityIcons name={'message-text-outline'} {...props} />
);
const RadiusMapIcon = props => (
  <MaterialCommunityIcons name={'map-marker-radius-outline'} {...props} />
);
const DeleteIcon = props => <Feather name={'trash-2'} {...props} />;

const MicIcon = props => <FontAwesome5 name="microphone" {...props} />;
const StarIcon = props => <Entypo name={'star'} {...props} />;
const ReplyIcon = props => <Feather name={'corner-up-left'} {...props} />;
const ForwardIcon = props => <Feather name={'corner-up-right'} {...props} />;
const CopyIcon = props => <AntDesign name={'copy1'} {...props} />;

export {
  ArrowRight,
  PlusIcon,
  CopyIcon,
  NotificationsIcon,
  KeyIcon,
  PencilIcon,
  ReplyIcon,
  ForwardIcon,
  PhoneIcon,
  StarIcon,
  MicIcon,
  FileIcon,
  RadiusMapIcon,
  ChatIcon,
  UserIcon,
  BackIcon,
  MenuIcon,
  ChevronLeft,
  PinIcon,
  UpCircleIcon,
  SendIcon,
  DownCircleIcon,
  HomeIcon,
  DeleteIcon,
  CompassIcon,
  BookIcon,
  FlagIcon,
  VideoIcon,
  PenIcon,
  SunIcon,
  HelpIcon,
  ChevronRight,
  HeadphoneIcon,
};
