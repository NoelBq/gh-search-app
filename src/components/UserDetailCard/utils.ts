import { UserDetails } from '@/utils/api';

export const getInfoItems = (user: UserDetails) => [
  {
    icon: 'mdi:map-marker',
    label: 'Location',
    value: user.location || 'Not Available',
  },
  {
    icon: 'mdi:web',
    label: 'Website',
    value: user.blog || 'Not Available',
    link: true,
  },
  { icon: 'mdi:email', label: 'Email', value: user.email || 'Not Available' },
  {
    icon: 'mdi:office-building',
    label: 'Company',
    value: user.company || 'Not Available',
  },
  { icon: 'mdi:github', label: 'GitHub', value: user.html_url, link: true },
  {
    icon: 'mdi:calendar',
    label: 'Joined',
    value: new Date(user.created_at).toLocaleDateString(),
  },
  {
    icon: 'mdi:folder',
    label: 'Public Repos',
    value: user.public_repos.toString(),
  },
  {
    icon: 'mdi:folder-open',
    label: 'Public Gists',
    value: user.public_gists.toString(),
  },
  { icon: 'mdi:account', label: 'Followers', value: user.followers.toString() },
  {
    icon: 'mdi:account-group',
    label: 'Following',
    value: user.following.toString(),
  },
  {
    icon: 'mdi:account-check',
    label: 'Hireable',
    value: user.hireable ? 'Yes' : 'No',
  },
];
