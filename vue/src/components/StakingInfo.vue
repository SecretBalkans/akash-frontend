<template>
  <div class="Wrapper bg-gray-100 py-2 px-4 mt-5">
    <div>Exchange rate: {{ stkdSecretInfo?.price ? stkdSecretInfo?.price / 10 ** 6 : "" }} SCRT/stkd-SCRT</div>
    <div v-if="!props.withdraw">Stake fee: {{ stakingFees?.deposit / 1000 }}%</div>
    <div v-else>Withdraw fee: {{ stakingFees?.withdraw / 1000 }}%</div>
    <div>Withdraw Period: 21 days + batch time (0-3 days)</div>
    <div>stkd-SCRT APY: ~15.15%</div>
  </div>
</template>
<script setup lang="ts">
import { useSecretStakingMarketData } from "@/def-composables/useSecretStakingMarketData";
import { useWalletStore } from "@/stores/useWalletStore";
import { computed } from "vue";
const walletStore = useWalletStore();
const marketData = computed(() => walletStore.secretJsClient && useSecretStakingMarketData(walletStore.secretJsClient));

const stkdSecretInfo = computed(() => marketData.value?.stkdSecretInfo.value);
const stakingFees = computed(() => marketData.value?.stakingFees.value);

const props = defineProps({
  withdraw: {
    type: Boolean,
  },
});
</script>

<style>
.Wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  font-size: small;
}
</style>
