import { Flex, FlexProps, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface SidebarItemProps extends FlexProps {
  icon: IconType;
  iconText: string;
  isActive?: boolean;
}

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <Flex
      alignItems={'center'}
      padding={'4'}
      ml={'2'}
      role="group"
      cursor={'pointer'}
      borderTopLeftRadius={'3rem'}
      borderBottomLeftRadius={'3rem'}
      bgColor={'white'}
      transition={'all .2s'}
      my={'1rem'}
      _hover={{ backgroundColor: 'main.100', color: 'white' }}
    >
      {props.icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: 'white'
          }}
          as={props.icon}
        />
      )}
      <Text fontWeight={'bold'}> {props.iconText}</Text>
    </Flex>
  );
};

export default SidebarItem;