import { computed, toRefs, reactive } from 'vue';

export function plusCalculator () {
  let state = reactive({
    num1: 0,
    num2: 0,
    result: computed(() => parseInt(state.num1) + parseInt(state.num2))
  });
  // 반응형으로 선언된 num1, num2, result가 동작하기 위해 toRefs를 사용해야함
  return toRefs(state)
}
