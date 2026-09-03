/**
 * Clinic Locations Configuration
 * Easily extensible for multiple clinics/branches in the future.
 */
export const clinicLocations = [
  {
    id: 'glenfield',
    name: 'Glenfield Clinic',
    nameI18n: {
      en: 'Glenfield Clinic',
      zh: 'Glenfield 诊所',
      de: 'Klinik Glenfield',
      ko: '글렌필드 클리닉',
      to: 'Glenfield Faito\'o'
    },
    address: '19 Beaudine Ave, Glenfield, Auckland, New Zealand',
    shortAddress: '19 Beaudine Ave, Glenfield, Auckland',
    suburb: 'Glenfield',
    city: 'Auckland',
    country: 'New Zealand',
    isPrimary: true,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=19+Beaudine+Ave,+Glenfield,+Auckland,+New+Zealand',
    noteI18n: {
      en: 'By appointment only',
      zh: '需提前预约',
      de: 'Nur nach Terminvereinbarung',
      ko: '사전 예약 필수',
      to: 'Fakatau taimi pē'
    }
  }
]

export default clinicLocations
