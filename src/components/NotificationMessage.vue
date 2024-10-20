<!-- NotificationMessage.vue -->
<template>
    <div :class="notificationClasses" class="w-full p-4 rounded-md border mb-4">
      <!-- Tek Cümle Bildirimler -->
      <p class="text-sm">
        <template v-if="notificationType === 'newUser'">
            <strong>[{{ data.date_tr }}]: </strong>Yeni kullanıcı <strong>{{ data.name }}</strong> e-posta adresi <strong>{{ data.email }}</strong> ile kaydoldu.
        </template>
  
        <template v-if="notificationType === 'newAppointmentRequest'">
            <strong>[{{ data.date_tr }}]: </strong><strong>{{ data.customer_name }}</strong> tarafından <strong>{{ data.attorney_name }}</strong> ile <strong>{{ data.date_for_display }}</strong> tarihinde saat <strong>{{ data.start_time }} - {{ data.end_time }}</strong> için yeni bir randevu talebi oluşturuldu.
        </template>
  
        <template v-if="notificationType === 'appointmentAccepted'">
            <strong>[{{ data.date_tr }}]: </strong><strong>{{ data.customer_name }}</strong> tarafından <strong>{{ data.attorney_name }}</strong> ile <strong>{{ data.date_for_display }}</strong> tarihli saat <strong>{{ data.start_time }} - {{ data.end_time }}</strong> arasında olan randevu talebi kabul edildi ve ayarlandı.
        </template>
  
        <template v-if="notificationType === 'newContactForm'">
            <strong>[{{ data.date_tr }}]: </strong>İletişim formundan yeni bir mesaj geldi: <strong>{{ data.name }}</strong> (<strong>{{ data.email }}</strong>): "{{ data.message }}".
        </template>
      </p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    notificationType: {
      type: String,
      required: true,
      validator: (value) => ['newUser', 'newAppointmentRequest', 'appointmentAccepted', 'newContactForm'].includes(value),
    },
    data: {
      type: Object,
      default: () => {},
    },
  });
  
  const notificationClasses = computed(() => {
    switch (props.notificationType) {
      case 'newUser':
        return 'bg-blue-50 text-blue-600 border-blue-300';
      case 'newAppointmentRequest':
        return 'bg-yellow-50 text-yellow-600 border-yellow-300';
      case 'appointmentAccepted':
        return 'bg-green-50 text-green-600 border-green-300';
      case 'newContactForm':
        return 'bg-gray-50 text-gray-600 border-gray-300';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-300';
    }
  });
  </script>
  