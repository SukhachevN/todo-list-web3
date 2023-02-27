import {
    Divider,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from '@chakra-ui/react';
import { BN } from '@project-serum/anchor';
import { FC } from 'react';

type TodoInfoModalType = {
    isOpen: boolean;
    title: string;
    description: string;
    createDate: BN;
    onClose: () => void;
};

const TodoInfoModal: FC<TodoInfoModalType> = ({
    isOpen,
    title,
    description,
    createDate,
    onClose,
}) => {
    const date = new Date(createDate.toNumber()).toLocaleDateString();

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent height="50%">
                <ModalHeader>
                    <Text variant="with-gradient" noOfLines={2} title={title}>
                        {title}
                    </Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody overflow="auto" mr={5}>
                    <Text>{description}</Text>
                </ModalBody>
                <Divider />
                <ModalFooter display="flex" justifyContent="flex-start">
                    <Text>Create date: {date}</Text>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default TodoInfoModal;