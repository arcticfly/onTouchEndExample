import React, {useEffect} from 'react';
import MapboxGL, {MapView} from '@rnmapbox/maps';

import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {Button, SafeAreaView, View} from 'react-native';
import {MAPBOX_TOKEN} from './utils';

MapboxGL.setAccessToken(MAPBOX_TOKEN);

const App = () => {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  const [sheetOpen, setSheetOpen] = React.useState(false);

  useEffect(() => {
    if (sheetOpen) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.dismiss();
    }
  }, [sheetOpen]);

  return (
    <BottomSheetModalProvider>
      <SafeAreaView>
        <MapView
          style={{height: '100%', width: '100%'}}
          onTouchEnd={() => console.log('onTouchEnd')}
        />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={[200]}
          enableContentPanningGesture={false}>
          <View />
        </BottomSheetModal>
        <View
          style={{
            position: 'absolute',
            top: 128,
            right: 32,
            backgroundColor: 'white',
          }}>
          <Button
            title="Toggle sheet"
            onPress={() => setSheetOpen(!sheetOpen)}
          />
        </View>
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

export default App;
