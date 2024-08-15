import clsx from 'clsx';
import { Component, onMount, Show } from 'solid-js';
import { Portal } from 'solid-js/web';
import { CloseIcon } from './icons-library/close';

export const Modal = (props: any) => {
  let modalRef: HTMLDivElement | undefined;

  const handleModalClose = () => {
    document.body.style.overflowY = 'auto';
    props.onClose();
  };

  const handleOverlayClick = (e: MouseEvent) => {
    if (!modalRef?.contains(e.target as Node)) {
      return handleModalClose();
    }
  };

  return (
    <Portal mount={document.getElementById('root')!}>
      <Show when={props.visible}>
        <div class="fixed bottom-0 left-0 right-0 top-0 z-20 overflow-y-hidden bg-black text-white">
          <div class="flex select-none justify-end">
            <button onClick={handleModalClose} class="mx-6 my-2">
              <CloseIcon />
            </button>
          </div>

          <div class="my-16 mx-auto w-full">{props.children}</div>
        </div>
      </Show>
    </Portal>
  );
};
